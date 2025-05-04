import Card3D from "@/components/card-3d";
import { Heading } from "@/components/heading";
import { developer } from "@/data/portfolio-data";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export function ContactInformation() {
  return (
    <>
      <motion.div variants={itemVariants} className="mb-8">
        <Heading as="h3" size="h4" weight="bold" align="left">
          Contact Information
        </Heading>
        <p className="text-muted-foreground mb-6">
          Feel free to reach out through any of the following channels. I'm
          always open to discussing new projects, creative ideas, or
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
        ].map((item) => (
          <div key={item.title}>
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
          </div>
        ))}
      </div>
    </>
  );
}
