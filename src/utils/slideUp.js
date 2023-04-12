import { keyframes } from 'styled-components';

export const slideUp = keyframes`
    from {
        transform: translateY(20px);
        opacity: 0;
        display: none;
    }
    to {
        transform: translateY(0px);
        opacity: 1;
        display: block;
    }
`;