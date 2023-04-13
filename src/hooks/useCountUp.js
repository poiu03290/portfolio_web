import { useState, useEffect} from 'react';

import { easeOutQuart } from '../utils/easeOutQuart';

const duration = 5000;
const frame = 1000 / 60;
const totalFrames = Math.ceil(duration / frame);

const useCountUp = (end, isShow) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        if(isShow) {
            let currentNumber = 0
            const counter = setInterval(() => {
                currentNumber += 1
                const progress = easeOutQuart(currentNumber / totalFrames)
                setCount(Math.ceil(end * progress))
    
                if (currentNumber >= totalFrames) {
                    clearInterval(counter);
                }
            }, frame)
        }
    }, [end, isShow]);

    return count;
};

export default useCountUp;