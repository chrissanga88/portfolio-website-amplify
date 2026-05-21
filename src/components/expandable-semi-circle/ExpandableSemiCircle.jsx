import { motion } from "motion/react";
import { HiChevronDoubleDown } from "react-icons/hi";
import { useState } from "react";
import "./expandable-semi-circle.css"

function ExpandableSemiCircle({ onSelect, isExpanded }) {

  return (
    <div className="semi-circle-container p-0" onClick={onSelect}>
      <motion.div 
        className="semi-circle m-auto"
        whileHover={{ backgroundColor: "#43826D"}}
      >
          <motion.div 
            className="chevron-container" 
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: .25, ease: "easeInOut"}}
            style={{originX: .5, originY: .5}}
          >
              <HiChevronDoubleDown className="chevron-icon"/>
          </motion.div>
      </motion.div>
    </div>
  )
}

export default ExpandableSemiCircle;