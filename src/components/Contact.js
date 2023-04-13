import { useState } from 'react';

import { theme } from '../style/theme';
import { slideUp } from '../utils/slide';
import useScrollPosition from '../hooks/useScrollPosition';

import styledComponents from "styled-components";

const Container = styledComponents.section`
    background-color: ${({ theme }) => theme.background};
    ${({ theme }) => theme.section}
    padding: 12.5em 0 6.25em;
    margin-top: 7.25em;
    color: #fff;
`

const SubTitle = styledComponents.h2`
    ${({ theme }) => theme.title};
    animation: ${({ isShow }) => isShow ? slideUp : undefined} 1000ms 500ms ease-out both;
    margin-bottom: 0.875em;
`

const Text = styledComponents.p`
    font-size: 1.5rem;
    margin-bottom: 1em;
    animation: ${({ isShow }) => isShow ? slideUp : undefined} 1000ms 1000ms ease-out both;
`

const ButtonLink = styledComponents.button`
    ${({ theme }) => theme.button}
    border: 2px solid #fff;
    margin: 0.6em 0.6em 0 0;
    padding: 0.4em 0.8em;
    color: #fff;
    animation: ${({ isShow }) => isShow ? slideUp : undefined} 1000ms 1500ms ease-out both;
`

const Address = styledComponents.div`
    font-size: 1.25rem;
    margin-top: 1.25em;
`

export const Contact = () => {
    const [isClick, setIsClick] = useState(false);
    const isShow = useScrollPosition(3700, false);

    return (
        <Container theme={theme}>
            {isShow && 
                <>
                    <SubTitle isShow={isShow} theme={theme}>Contact</SubTitle>
                    <Text isShow={isShow}>Do you wanna work with me?</Text>
                    <ButtonLink isShow={isShow} theme={theme} onClick={() => setIsClick(!isClick)}>Click Me</ButtonLink>
                    {isClick && <Address>poiu03290@gmail.com / 010-2290-3261</Address>}
                </>
            }
        </Container>
    )
}