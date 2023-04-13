import { Link } from 'react-router-dom';

import styledComponents from "styled-components";

import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Container = styledComponents.section`
    padding: 100px 650px;
    background-color: #303030;
    color: #fff;
`

const Contents = styledComponents.div`
    text-align: center;
    font-size: 2.25rem;
    border-bottom: 2px solid hsla(0,0%,100%,.1);
    padding-bottom: 0.875em;
`

const Text = styledComponents.p`
    text-align: center;
    padding-top: 1.25em;
`

export const Footer = () => {
    return (
        <Container>
            <Contents>
                <Link to={'https://github.com/poiu03290'} target='blank'>
                    <FaGithub style={{'margin-right': '32px'}}/>
                </Link>
                <Link to={'https://www.linkedin.com/in/%ED%98%81-%EA%B6%8C-1bb357272/'} target='blank'>
                    <FaLinkedin />
                </Link>
            </Contents>
            <Text>© 2023 - Hyuk</Text>
        </Container>
    )
}