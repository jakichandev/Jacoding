import { motion } from "framer-motion";
type SectionProps = {
  children: React.ReactNode;
  extraClasses?: string;
  custom?: boolean;
  paddingY?: "small" | "default" | "large" | "custom";
};

const SECTION_STYLES = {
  DEFAULT: "px-sections-mobile md:px-sections" as const,
  PY: {
    default: "py-12 md:py-22" as const,
    small: "py-8" as const,
    large: "py-26 md:py-30" as const,
    custom: "" as const,
  },
};

export const Section = ({
  children,
  extraClasses,
  custom = false,
  paddingY = "default",
}: SectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        duration: 2,
      }}
      viewport={{ once: true }}
      className={
        custom
          ? `${extraClasses}`
          : `${SECTION_STYLES.DEFAULT} ${SECTION_STYLES.PY[paddingY]} ${extraClasses}`
      }
    >
      {children}
    </motion.section>
  );
};
