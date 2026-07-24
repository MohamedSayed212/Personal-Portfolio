import { motion } from "framer-motion";

function SectionAnimation({ children, id, className = "" }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      // `amount` is a ratio of the ELEMENT, so a section taller than 5x the
      // viewport can never reach 0.2 and would stay stuck at opacity 0.
      // Trigger off the viewport instead: fire once the top edge passes 85%.
      viewport={{ once: true, amount: "some", margin: "0px 0px -15% 0px" }}
    >
      {children}
    </motion.section>
  );
}

export default SectionAnimation;
