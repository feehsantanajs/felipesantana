import { motion } from "framer-motion";

interface RelevantStackProps {
  title: string;
  x1: number;
  d: number;
}

export function RelevantStack({ title, x1, d }: RelevantStackProps) {
  return (
    <motion.div
      className="text-sm mt-4 lg:text-sm rounded bg-teal-900 p-1 font-semibold"
      initial={{ opacity: 0, x: x1 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeInOut", duration: d }}
      exit={{ opacity: 0 }}
    >
      {title}
    </motion.div>
  );
}
