import { motion } from "framer-motion";
import { useHook } from "@/hooks";

export default function DisplayName() {
  const { currentTab } = useHook();
  const name = "JIN WON LEE";

  return (
    <section className="font-jost font-semibold text-3xl mt-2">
      {name.split("").map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: currentTab === "home" ? 1 : 0,
          }}
          transition={{
            duration: 1.5,
          }}
          style={{ display: "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter} {/* Preserve space */}
        </motion.span>
      ))}
    </section>
  );
}
