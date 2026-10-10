import { useEffect, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { GripHorizontal } from "lucide-react";

type BuilderNodeProps = {
  children?: ReactNode;
  className?: string;
  label: string;
  index?: string;
  status?: "ready" | "active" | "draft";
  staggerIndex?: number;
};

const nodeVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1 },
};

export function BuilderNode({
  children,
  className = "",
  label,
  index,
  status = "ready",
  staggerIndex = 0,
}: BuilderNodeProps) {
  const reduceMotion = useReducedMotion();
  const lift = useMotionValue(reduceMotion ? 0 : 24);
  const springLift = useSpring(lift, {
    stiffness: 520,
    damping: 32,
    mass: 0.24,
  });

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setTimeout(() => lift.set(0), 100 + staggerIndex * 105);
    return () => window.clearTimeout(timer);
  }, [lift, reduceMotion, staggerIndex]);

  return (
    <motion.div
      className={`builder-node ${className}`.trim()}
      variants={nodeVariants}
      initial={reduceMotion ? false : "hidden"}
      animate="visible"
      style={reduceMotion ? undefined : { y: springLift }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              scale: 1.012,
              transition: { type: "spring", stiffness: 620, damping: 28 },
            }
      }
      transition={{
        type: "spring",
        stiffness: 520,
        damping: 32,
        mass: 0.55,
        delay: reduceMotion ? 0 : staggerIndex * 0.105,
      }}
    >
      <div className="builder-node-chrome">
        <span className="builder-node-id">
          <GripHorizontal size={14} aria-hidden="true" />
          {index ? `${index} · ` : ""}
          {label}
        </span>
        <span className={`builder-node-status is-${status}`}>
          <i aria-hidden="true" /> {status === "active" ? "ACTIVE" : status === "draft" ? "DRAFT" : "READY"}
        </span>
      </div>
      {children}
    </motion.div>
  );
}
