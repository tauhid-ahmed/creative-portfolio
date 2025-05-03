"use client";

import type React from "react";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { developer } from "@/data/portfolio-data";
import Card3D from "@/components/card-3d";
import ParallaxSection from "@/components/parallax-section";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-25" />
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10" />
      <div className="absolute top-1/3 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-1/3 -left-40 w-80 h-80 rounded-full bg-purple-400/10 blur-3xl" />

      <div className="container px-4 md:px-6 relative z-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 inline-block mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 gradient-text">
            Let's Connect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out through any of the following channels.
                I'm always open to discussing new projects, creative ideas, or
                opportunities.
              </p>
            </motion.div>

            <div className="grid gap-6">
              {[
                {
                  icon: <Mail className="h-6 w-6 text-white" />,
                  title: "Email",
                  content: developer.email,
                  link: `mailto:${developer.email}`,
                  color: "from-violet-500 to-purple-500",
                },
                {
                  icon: <Phone className="h-6 w-6 text-white" />,
                  title: "Phone",
                  content: developer.phone,
                  link: `tel:${developer.phone.replace(/\s/g, "")}`,
                  color: "from-blue-500 to-cyan-400",
                },
                {
                  icon: <MapPin className="h-6 w-6 text-white" />,
                  title: "Location",
                  content: developer.location,
                  link: `https://maps.google.com/?q=${encodeURIComponent(
                    developer.location
                  )}`,
                  color: "from-pink-500 to-rose-400",
                },
              ].map((item, index) => (
                <ParallaxSection key={item.title} direction="left" speed={0.2}>
                  <Card3D className="modern-card">
                    <div className="flex items-start gap-4">
                      <div
                        className={`bg-gradient-to-r ${item.color} p-3 rounded-full`}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">{item.title}</h4>
                        <a
                          href={item.link}
                          className="text-muted-foreground hover:text-primary transition-colors interactive"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.content}
                        </a>
                      </div>
                    </div>
                  </Card3D>
                </ParallaxSection>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card3D className="modern-card">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Send Me a Message
              </h3>
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
                    className="bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary interactive"
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
                    className="bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary interactive"
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
                    className="bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary interactive"
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gap-2 bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 transition-opacity interactive"
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
            </Card3D>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
