
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

function TextAnimation({ words }) {

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 6000);

    return() => clearInterval(interval);
  }, [words]);

  const currentWord = words[currentWordIndex];

  const renderN = (currentWord) => {
    if (["a", "e", "i", "o", "u"].includes(currentWord[0].toLowerCase())) {
      return <span>n&nbsp;</span>
    };
    
    return <span>&nbsp;</span>
  };

  return(
    <Wrapper>
      {renderN(currentWord)}
      {currentWord.split("").map((letter, letterIndex) => (
        <span key={letterIndex} style={ {animationDelay: `${letterIndex * .05}s` }}>{letter}</span>
      ))}
    </Wrapper>
  )
}

const animation = keyframes`
  0% { opacity: 0; transform: scale(1) translateY(-100px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(10px);}
  15% { opacity: 1; transform: scale(1) translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px);}
  60% { opacity: 1; transform: scale(1) translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px);}
  75% { opacity: 0; transform: scale(2) translateY(-30px) translateX(100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px);}
`

const Wrapper = styled.span`
  display: inline-block;
  span {
    display: inline-block;
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 6s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    
  }
`
TextAnimation.propTypes = {
  words: PropTypes.array.isRequired,
};
export default TextAnimation;