import { motion } from "framer-motion";

export default function DisplayName() {
  const name = "JINWON LEE";

  return (
    <section className="text-white font-kodchasan font-semibold text-3xl">
      {name.split("").map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: i * 0.1, // Slight delay for a staggered fade-in effect
          }}
          style={{ display: "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter} {/* Preserve space */}
        </motion.span>
      ))}
    </section>
  );
}

