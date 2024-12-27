import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HomeTabs() {
  const [isMoved, setIsMoved] = useState(false);

  const tabs = ["Experience", "Projects"];

  const containerVariants = {
    // Initial position of the conatiner
    initial: { x: 0, y: 0 },
    moved: {
      x: "40vw", // Move to the right
      y: "-20vh", // Move higher on the screen
      transition: {
        x: { duration: 0.8, ease: "easeInOut" }, // Smooth horizontal movement
        y: { duration: 0.8, ease: "easeInOut" }, // Smooth vertical movement
      },
    },
  };

  // Button Animations
  const buttonVariants = {
    initial: { y: 0, x: 0, opacity: 1 },
    moved: (index: number) => ({
      y: index * 50, // button y position spacing
      x: -index * 112, // align the buttons x position
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section className="flex justify-center items-center">
      <motion.div
        className={`flex ${isMoved ? "items-center" : "gap-4"}`} // Dynamic layout
        variants={containerVariants}
        initial="initial"
        animate={isMoved ? "moved" : "initial"}
        style={{ position: "relative" }}
      >
        {tabs.map((tab, index) => (
          <motion.div
            key={tab}
            custom={index}
            variants={buttonVariants}
            initial="initial"
            animate={isMoved ? "moved" : "initial"}
            style={{
              position: "relative",
              left: 0,
            }}
          >
            <Button
              variant="outline"
              className="px-4 py-2 w-28 text-sm"
              onClick={() => setIsMoved(true)}
            >
              {tab}
            </Button>
          </motion.div>
        ))}

        {/* Back Button (only visible when moved) */}
        {isMoved && (
          <motion.div
            key="Back"
            custom={tabs.length}
            variants={buttonVariants}
            initial="initial"
            animate="moved" // Animate Back button along with others
            style={{
              position: "relative",
              left: 0,
            }}
          >
            <Button
              variant="outline"
              className="px-4 py-2 w-28 text-sm"
              onClick={() => setIsMoved(false)}
            >
              Back
            </Button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
