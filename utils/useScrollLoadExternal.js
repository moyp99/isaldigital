import { useState } from "react";
import { useInView } from "react-intersection-observer";

//Reusable components

const useScrollLoadExternal = () => {

  function loadCalendly() {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }

  const [loaded, setLoaded] = useState(false);

  const [element, view] = useInView({ threshold: 0.1 }); //threshold means that once you reach the 0.5 part of the component it will be fired
  if (view && loaded === false) {
      loadCalendly();
      setLoaded(true);
      
  } else {
    
  }
  return element //Here we are creating a hook
};

export default useScrollLoadExternal;
