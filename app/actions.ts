'use server';

import prisma from "./lib/db";
import { requireUser } from "./lib/hooks";
import { parseWithZod } from '@conform-to/zod';
import { onboardingSchemaValidation } from "./lib/zodSchemas";
import { redirect } from "next/navigation";

export async function onBoardingAction(prevState: any, formData: FormData) {
  const session = await requireUser();

  const submission = await parseWithZod(formData, {
    schema: onboardingSchemaValidation({
      async isUsernameUnique() {
        const existingUser = await prisma.user.findUnique({
          where: {
            userName: formData.get("userName") as string,
          },
        });
        return !existingUser;
      },
    }),
    async: true,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  await prisma.user.update({
    where: {
      id: session.user?.id,
    },
    data: {
      userName: submission.value.userName,
      name: submission.value.fullName,
    },
  });

  return redirect("/dashboard");
}
