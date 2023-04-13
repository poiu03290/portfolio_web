import styledComponents from "styled-components";

import { Header } from "../components/Header"
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

const Container = styledComponents.section`
    max-width: 100vw; 
    height: 100vh;
    font-family: 'Kanit', sans-serif;
`

export const Main = () => {
    return (
        <Container>
            <Header />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </Container>
    )
}