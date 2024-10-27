import { z } from 'zod';
import { conformZodMessage } from '@conform-to/zod';

export const onBoardingSchema = z.object({
  fullName: z.string().min(3).max(150),
  userName: z.string().min(3).max(150).regex(/^[a-zA-Z0-9-]+$/, {
    message: "Username can only contain letters, numbers, and hyphens",
  }),
});

export function onboardingSchemaValidation(options?: { isUsernameUnique: () => Promise<boolean> }) {
  return z.object({
    userName: z.string()
      .min(3)
      .max(150)
      .regex(/^[a-zA-Z0-9-]+$/, {
        message: "Username must contain only letters, numbers, and hyphens",
      })
      .pipe(
        z.string().superRefine(async (_, ctx) => {
          if (typeof options?.isUsernameUnique !== "function") {
            ctx.addIssue({
              code: "custom",
              message: conformZodMessage.VALIDATION_UNDEFINED,
              fatal: true,
            });
            return;
          }
          const isUnique = await options.isUsernameUnique();
          if (!isUnique) {
            ctx.addIssue({
              code: "custom",
              message: "Username is already used",
            });
          }
        })
      ),
    fullName: z.string().min(3).max(150),
  });
}

export const aboutSettingsSchema = z.object({
  fullName: z.string().min(3).max(150),

  profileImage: z.string(),
});

