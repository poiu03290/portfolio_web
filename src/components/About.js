import { Link } from 'react-router-dom';

import { theme } from '../style/theme';
import { slideUp, slideRight } from '../utils/slide';
import useCountUp from '../hooks/useCountUp';
import useScrollPosition from '../hooks/useScrollPosition';

import styledComponents from "styled-components";

import Image from '../assets/KakaoTalk_20220419_205002265.jpg';

const Container = styledComponents.section`
    background-color: ${({ theme }) => theme.background};
    ${({ theme }) => theme.section}
    height: 100vh;
    color: #fff;
`

const SubTitle = styledComponents.h2`
    ${({ theme }) => theme.title};
    animation: ${({ isShow }) => isShow ? slideUp : undefined} 1000ms 500ms ease-out both;
`

const Profile = styledComponents.div`
    display: flex;
    flex-direction: row;
    max-width: 1280px;
`

const ProfileImage = styledComponents.div`
    background: url(${({ image }) => image}) center 62% no-repeat;
    width: 400px; height: 400px;
	border-radius: 50%;
    margin-right: 160px;
    animation: ${({ isShow }) => isShow ? slideRight : undefined} 1000ms 500ms ease-out both;
`

const Description = styledComponents.p`
    max-width: 680px;
    font-size: 1.125rem;
    line-height: 32px;
    font-weight: bold;
    animation: ${({ isShow }) => isShow ? slideUp : undefined} 1000ms 1000ms ease-out both;
`

const ResumeButton = styledComponents.button`
    ${({ theme }) => theme.button};
    color: #fff;
    border: 2px solid #fff;
    padding: 0.4em 0.8em;
    margin-top: 0.6em;
`

export const About = () => {
    const isShow = useScrollPosition(200, false);

    const time = useCountUp(70, isShow);
    const accuracy = useCountUp(100, isShow);

    return (
        <Container theme={theme}>
            {isShow && 
            <>
                <SubTitle theme={theme} isShow={isShow}>About Me</SubTitle>
                <Profile>
                    <ProfileImage isShow={isShow} image={Image}></ProfileImage>
                    <Description isShow={isShow}>
                        안녕하세요 :)
                        <br />
                        웹 프론트엔드 개발자가 되기를 희망하고 있습니다.
                        <br />
                        <br />
                        더 나은 문제 해결을 위해 새로운 기술과 분야에 대해 습득하는 것을 좋아합니다.
                        <br />
                        또한 배운 것을 기록하고 공유하는 것을 좋아합니다.
                        <br />
                        <br />
                        운영팀의 업무를 효율적으로 하기 위해 부서 내 Apps_Scrpit를 도입하여
                        관련 업무 시간을 약 {time}% 이상 줄이고, {accuracy}%의 정확성을 이룬 경험이 있습니다.
                        <br />
                        <br />
                        👇 아래 버튼을 통해 이력서를 확인할 수 있습니다.
                        <br />
                        <Link to={'https://drive.google.com/file/d/16rzKx5C4LwhEgenSKF53tS2MWl7-G6T8/view?usp=sharing'} target='blank'>
                            <ResumeButton theme={theme}>Resume</ResumeButton>
                        </Link>
                    </Description>
                </Profile>
            </>
            }
        </Container>
    )
}