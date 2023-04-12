import styledComponents from "styled-components";

import { Header } from "../components/Header"
import { About } from "../components/About";
import { Projects } from "../components/Projects";

const Cantainer = styledComponents.section`
    max-width: 100vw; 
    height: 100vh;
    font-family: 'Kanit', sans-serif;
`

export const Main = () => {
    return (
        <Cantainer>
            <Header />
            <About />
            <Projects />
        </Cantainer>
    )
}