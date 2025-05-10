"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import Card3D from "@/components/card-3d";

import { Heading } from "@/components/heading";

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Show success message
    setSubmitStatus({
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    });

    // Reset form
    setFormState({ name: "", email: "", message: "" });
    setIsSubmitting(false);

    // Clear status after 5 seconds
    setTimeout(() => {
      setSubmitStatus(null);
    }, 5000);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="order-1 lg:order-2"
      >
        <Card3D className="modern-card">
          <div className="space-y-6">
            <Heading as="h3" size="h4" align="left">
              Send Me a Message
            </Heading>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary "
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary "
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary "
                  disabled={isSubmitting}
                />
              </div>

              <Button
                type="submit"
                className="w-full gap-2 bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 transition-opacity "
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>

              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-3 rounded-md text-center ${
                    submitStatus.success
                      ? "bg-green-500/10 text-green-500"
                      : "bg-red-500/10 text-red-500"
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}
            </form>
          </div>
        </Card3D>
      </motion.div>
    </>
  );
}
