import z from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Email is required" }),
  message: z.string().min(20, { message: "Message is required" }),
});

export type ContactSchema = z.infer<typeof contactSchema>;
