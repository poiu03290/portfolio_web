import { Link } from 'react-router-dom';

import { theme } from '../style/theme';
import { slideUp } from "../utils/slide";
import useScrollPosition from '../hooks/useScrollPosition';

import styledComponents from "styled-components";

import project1 from '../assets/overflowing-river-of-science.png';
import project2 from '../assets/open-market.png';
import project3 from '../assets/orange-market.png';
import project4 from '../assets/number-baseball.png';

const Section = styledComponents.div`
    display: flex;
    flex-direction: row;
    max-width: 1280px;
    margin: 0 auto;
    animation: ${({ isShow }) => isShow ? slideUp : undefined} 1000ms 500ms ease-out both;
`

const ProjectDescription = styledComponents.div`
    width: 780px;
`

const ProjectImage = styledComponents.div`
    width: 500px; height: 500px;
    background: url(${({ image }) => image}) no-repeat top / contain;
    margin: 0 2.5em 0;
    cursor: pointer;
`

const ProjectTitle = styledComponents.h3`
    font-size: 2rem;
    margin: 0 0 0.5em;
    padding: 0 0 0.5em;
    border-bottom: 2px solid black;
`

const ProjectDetail = styledComponents.p`
    line-height: 30px;
    font-size: 1.125rem;
`

const LinkButton = styledComponents.button`
    ${({ theme }) => theme.button}
    border: 2px solid ${({ theme }) => theme.MediumText};
    margin: 0.6em 0.6em 0 0;
    padding: 0.4em 0.8em;
    color: ${({ theme }) => theme.MediumText}
`

export const ScienceProject = () => {
    const isShow = useScrollPosition(1500, false);
    return (
        <>
            {isShow && 
                <Section isShow={isShow}>
                    <ProjectDescription>
                        <ProjectTitle>Overflowing river of Seience</ProjectTitle>
                        <ProjectDetail>
                            ChatGPT를 이용한 자동 블로그 프로젝트입니다. 해당 프로젝트의 목적은 해외 사용자의 유입이였고, 이를 위해 블로그 글은 영어로 제작하고, 사용자와 친숙한 주제를 선정했습니다. 
                            <br />또한, 자동화하기 위한 툴로 Zapier를 선택하고, 데이터를 저장하기 위한 데이터베이스 툴은 Airtable을 선택했습니다.
                        </ProjectDetail>
                        <Link to={'http://overflowingscience.site/'} target='blank'>
                            <LinkButton theme={theme}>See Live</LinkButton>
                        </Link>
                        <Link to={'https://github.com/poiu03290/Overflowing_river_of_Science'} target='blank'>
                            <LinkButton theme={theme}>Source Code</LinkButton>
                        </Link>
                    </ProjectDescription>
                    <ProjectImage image={project1}></ProjectImage>
                </Section>
            }
        </>
    )
}

export const OpenMarketProject = () => {
    const isShow = useScrollPosition(1900, false);

    return (
        <>
        {isShow && 
            <Section isShow={isShow}>
                <ProjectDescription>
                    <ProjectTitle>Open Market</ProjectTitle>
                    <ProjectDetail>
                        오픈마켓 서비스는 구매자와 판매자로 구별됩니다. 구매자는 장바구니를 통해 상품을 저장해둘 수 있으며, 원하는 상품을 구매할 수 있습니다. 
                        <br />반면 판매자는 상품을 등록하여 상품을 판매할 수 있습니다. 
                        <br />추가로 구매자와 판매자의 회원가입과 로그인을 할 수 있습니다.
                    </ProjectDetail>
                    <Link to={'http://open-market-service.s3-website.ap-northeast-2.amazonaws.com/'} target='blank'>
                        <LinkButton theme={theme}>See Live</LinkButton>
                    </Link>
                    <Link to={'https://github.com/poiu03290/open-market'} target='blank'>
                        <LinkButton theme={theme}>Source Code</LinkButton>
                    </Link>
                </ProjectDescription>
                <ProjectImage image={project2}></ProjectImage>
            </Section>
        }
        </>
        
    )
}

export const OrangeMarketProject = () => {
    const isShow = useScrollPosition(2400, false);

    return (
        <>
            {isShow && 
                <Section isShow={isShow}>
                    <ProjectDescription>
                        <ProjectTitle>Orange Market</ProjectTitle>
                        <ProjectDetail>
                            감귤마켓 서비스는 SNS 기능을 구현함과 동시에 상품까지 등록하여 판매할 수 있는 서비스입니다.
                            <br /> 검색을 통해 사용자를 검색할 수 있으며, 포스트한 글에 댓글과 좋아요를 통해 흔적을 남길 수 있습니다.
                        </ProjectDetail>
                        <Link to={'https://likelion-snsproject.vercel.app/'} target='blank'>
                            <LinkButton theme={theme}>See Live</LinkButton>
                        </Link>
                        <Link to={'https://github.com/poiu03290/likelion_snsproject'} target='blank'>
                            <LinkButton theme={theme}>Source Code</LinkButton>
                        </Link>
                    </ProjectDescription>
                    <ProjectImage image={project3}></ProjectImage>
                </Section>
            }
        </>
        
    )
}

export const NumberBaseballProject = () => {
    const isShow = useScrollPosition(2900, false);

    return (
        <>
            {isShow && 
                <Section isShow={isShow}>
                    <ProjectDescription>
                        <ProjectTitle>Number baseball</ProjectTitle>
                        <ProjectDetail>
                            숫자야구 프로젝트는 사용자가 난이도에 따라 숫자로 이루어진 문제를 푸는 서비스입니다.
                            <br />게임이 끝난 이후 해당 게임 기록과 모든 사용자의 점수와 순위를 확인할 수 있습니다.
                            <br />역시나 회원가입과 로그인을 할 수 있습니다.
                        </ProjectDetail>
                        <Link to={'http://number-baseball.s3-website.ap-northeast-2.amazonaws.com/'} target='blank'>
                            <LinkButton theme={theme}>See Live</LinkButton>
                        </Link>
                        <Link to={'https://github.com/poiu03290/number-baseball'} target='blank'>
                            <LinkButton theme={theme}>Source Code</LinkButton>
                        </Link>
                    </ProjectDescription>
                    <ProjectImage image={project4}></ProjectImage>
                </Section>
            }
        </>
        
    )
}