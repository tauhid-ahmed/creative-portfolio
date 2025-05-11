"use client";
import { motion } from "motion/react";
import { Container } from "@/components/layout/container";
import { ContactInformation } from "./contact-information";
import {
  Section,
  SectionDescription,
  SectionHeader,
  SectionContent,
  SectionName,
  SectionTitle,
} from "@/components/layout/section";
import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <Section id="contact">
      <SectionContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader>
            <SectionName>Get In Touch</SectionName>
            <SectionTitle>Let&#39;s Connect</SectionTitle>
            <SectionDescription>
              Have a project in mind or want to discuss potential opportunities?
              I&#39;d love to hear from you!
            </SectionDescription>
          </SectionHeader>
        </motion.div>
        <Container>
          <div className="flex flex-col lg:flex-row gap-14 mt-10 lg:items-end">
            <div className="flex-1 lg:order-2">
              <ContactForm />
            </div>
            <div className="flex-1">
              <ContactInformation />
            </div>
          </div>
        </Container>
      </SectionContent>
    </Section>
  );
}
