import { slideUp } from "../utils/slide";

import { theme } from '../style/theme';

import styledComponents from "styled-components";

const Container = styledComponents.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3.5rem;
    padding: 0 1em;
`

const Title = styledComponents.h1`
    max-width: 1280px;
    line-height: 72px;
    animation: ${slideUp} 700ms 300ms ease-out;
`

const FontColor = styledComponents.span`
    color: ${({ theme }) => theme.MediumText};
`

export const Header = () => {
    return(
        <Container>
            <Title>
                Hi, my name is <FontColor theme={theme}>Kwon Hyuk</FontColor>. <br />
                I am a front-end developer who realizes business value through business sense.
            </Title>
        </Container>
    )
}