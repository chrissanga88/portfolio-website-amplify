import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function AnimateLetters({ words }) {

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // useEffect handles a timed rotation through an array of words. The interval is run every 6 seconds for every word in the array and loops infinitely. 
  useEffect(() => {
    const interval = setInterval(() => {
      // using modulo will infinitely loop through the words array. When the final word is reached the prevIndex + 1 will always equal words.length and the modulo of those two numbers will equal 0 since there is no remainder. 
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 6000);

    return() => clearInterval(interval);
  }, [words]);

  const currentWord = words[currentWordIndex];

  /* 
    - / ... /: These slashes tell JavaScript that the code inside is a regular expression.
    - ^: This is an anchor that means "start of the string." It ensures the code only looks at the very first character of the word.
    - [aeiou]: This is a character set. It matches any single character that is one of those five vowels.
    - i: This is a flag that stands for "case-insensitive." It allows the pattern to match both "A" and "a".
    - .test(): This is a built-in method that checks if the string matches the pattern. It returns true if the word starts with a vowel and false if it doesn't.
  
    The article will be incorrect for certain words that are an exception to the rule. 
  */
  const article = /^[aeiou]/i.test(currentWord) ? "an" : "a";

  /*const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
    exit: {transition: { staggerChildren: 0.05, delayChildren: 0.1 }}
  };

  const child = {
    hidden: { opacity: 0, y: -100, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8 } },
    exit: {
      opacity: 0,
      scale: 1.5,
      y: -30,
      x: 100,
      skewY: 10,
      skewX: 10,
      rotateZ: 30,
      filter: "blur(10px)",
      transition: { duration: 1 },
    }
  };*/

const container = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.04, delayChildren: 0.2 } 
    },
    exit: {
      opacity: 0,
      y: -20,
      filter: "blur(10px)",
      transition: { duration: 0.4, ease: "easeIn" }
    }
  };

  const child = {
    hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { type: "spring", damping: 12, stiffness: 100 } 
    }
  };

  return (
    <div className="d-inline-flex align-items-center">
        <span>{article}&nbsp;</span>

      
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWordIndex}
          variants={container}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="d-inline-block" 
        >

          {currentWord.split("").map((letter, i) => (
            <motion.span 
              key={`${currentWord}-${i}`} 
              variants={child} 
              className="d-inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export default AnimateLetters;