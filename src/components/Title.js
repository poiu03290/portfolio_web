import styledcomponents from 'styled-components';

const Container = styledcomponents.section`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3.5rem;
    padding: 0 1em;
`

const Title = styledcomponents.h1`
    max-width: 1280px;
    line-height: 72px;
`

export const Header = () => {
    return(
        <Container>
            <Title>
                Hi, my name is Kwon Hyuk. <br />
                I am a front-end developer who realizes business value through business sense.
            </Title>
        </Container>
    )
}