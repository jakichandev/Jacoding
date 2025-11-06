type SectionProps = {
  children: React.ReactNode;
  extraClasses?: string;
  custom?: boolean;
  paddingY?: "small" | "default" | "large";
};

const SECTION_STYLES = {
  DEFAULT: "px-sections-mobile md:px-sections" as const,
  PY: {
    default: "py-22" as const,
    small: "py-8" as const,
    large: "py-30" as const,
  },
};

export const Section = ({
  children,
  extraClasses,
  custom = false,
  paddingY = "default",
}: SectionProps) => {
  return (
    <section
      className={
        custom
          ? `${extraClasses}`
          : `${SECTION_STYLES.DEFAULT} ${SECTION_STYLES.PY[paddingY]} ${extraClasses}`
      }
    >
      {children}
    </section>
  );
};
