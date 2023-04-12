import { useState, useEffect } from 'react';

const useScrollPosition = (scroll, initialState) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isShow, setIsShow] = useState(initialState);

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    }, []);

    useEffect(() => {
        if (scrollPosition > scroll) {
            setIsShow(true);
        }
    }, [scrollPosition, scroll])

    return isShow
}

export default useScrollPosition