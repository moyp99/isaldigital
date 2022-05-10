import { useState } from "react";
import { useInView } from "react-intersection-observer";

const useScrollDisplay = () => {
  const [loaded, setLoaded] = useState(false);
  const [display, setDisplay] = useState(false);

  const [element, view] = useInView({ threshold: 0.1 }); //threshold means that once you reach the 0.5 part of the component it will be fired
  if (view && loaded === false) {
      setDisplay(true)
      setLoaded(true);
      
  } 
  return [element, display] //Here we are creating a hook
};

export default useScrollDisplay;
