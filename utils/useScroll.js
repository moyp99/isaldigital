import {useInView} from 'react-intersection-observer';
import {useAnimation} from 'framer-motion'

//Reusable components

const useScroll = () => {
    const control = useAnimation();
    const [element, view] = useInView({threshold: .1}); //threshold means that once you reach the 0.5 part of the component it will be fired
    if(view){
        control.start('show');
    }
    else{
        control.start('hidden');
    }
    return [element, control]; //Here we are creating a hook
}

export default useScroll