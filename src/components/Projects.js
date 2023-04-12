import { theme } from '../style/theme';
import { slideUp } from "../utils/slideUp";
import useScrollPosition from '../hooks/useScrollPosition';

import styledComponents from "styled-components";

const Container = styledComponents.section`
    ${({ theme }) => theme.section};
`

const SubTitle = styledComponents.h2`
    ${({ theme }) => theme.title}
    animation: ${({ isShow }) => isShow ? slideUp : undefined} 1000ms 500ms ease-out both;
    margin: 2.4em 0 4em;
`

export const Projects = () => {
    const isShow = useScrollPosition(700, false);
    
    return (
        <Container>
            {isShow && 
                <>
                    <SubTitle theme={theme} isShow={isShow}>Projects</SubTitle>
                </>
            }
        </Container>
    )
}