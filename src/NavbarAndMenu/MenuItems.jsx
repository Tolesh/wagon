import * as React from "react";
import { motion } from "framer-motion";
import './navmenu.css'
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#fef6e4", "#f582ae", "#8bd3dd", "#b8c1ec", "#ff8906"];

export const MenuItem = ({ id, text, icon }) => {
  const style = { border: `3px solid ${colors[id]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" style={style}>
        <span className="icon">{icon}</span>
      </div>

      <div className="text-placeholder" style={style}>
        <span className="text">{text}</span>
      </div>
    </motion.li>
  );
};
