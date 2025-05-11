"use client";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Card3D from "@/components/card-3d";
import { useForm } from "react-hook-form";

import { Heading } from "@/components/heading";
import { InputField } from "@/components/input-field";
import { Form } from "@/components/ui/form";
import { TextAreaField } from "@/components/text-area";

export function ContactForm() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  return (
    <>
      <Form {...form}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="order-1 lg:order-2"
        >
          <Card3D>
            <div className="space-y-6">
              <Heading as="h3" size="h4" align="left">
                Send Me a Message
              </Heading>
              <form
                onSubmit={form.handleSubmit((data) => console.log(data))}
                className="space-y-6"
              >
                <InputField label="Name" name="name" placeholder="Your name" />

                <InputField
                  label="Email"
                  name="email"
                  placeholder="Your email"
                />

                <TextAreaField
                  label="Message"
                  name="message"
                  placeholder="Your message"
                />

                <Button type="submit">
                  <Send className="h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </Card3D>
        </motion.div>
      </Form>
    </>
  );
}
