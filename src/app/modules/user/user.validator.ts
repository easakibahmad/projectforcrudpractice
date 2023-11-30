import { z } from "zod";

const UserSchemaValidator = z.object({
  password: z
    .string({
      invalid_type_error: "Password must be a string",
    })
    .min(8, { message: "Password must be at least 8 characters long" })
    .optional(),
});

export const UserZodValidator = {
  UserSchemaValidator,
};
