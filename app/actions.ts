'use server';

import prisma from "./lib/db";
import { requireUser } from "./lib/hooks";
import { parseWithZod } from '@conform-to/zod';
import { onboardingSchemaValidation,aboutSettingsSchema, } from "./lib/zodSchemas";
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

  return redirect("/onboarding/grant-id");
}

export async function SettingsAction(prevState: any, formData: FormData) {
  const session = await requireUser();

  const submission = parseWithZod(formData, {
    schema: aboutSettingsSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const user = await prisma.user.update({
    where: {
      id: session.user?.id as string,
    },
    data: {
      name: submission.value.fullName,
      image: submission.value.profileImage,
    },
  });

  return redirect("/dashboard");
}
