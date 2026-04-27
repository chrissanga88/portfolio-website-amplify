import { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';


function BootstrapControlled({children}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
  <Carousel className='h-100' activeIndex={index} onSelect={handleSelect} interval={null}>
        {children}
  </Carousel>
  )
};

export default BootstrapControlled;