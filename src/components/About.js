import { theme } from '../style/theme';
import { slideUp } from '../utils/slideUp';
import useScrollPosition from '../hooks/useScrollPosition';

import styledComponents from "styled-components";

import Image from '../assets/KakaoTalk_20220419_205002265.jpg';

const Container = styledComponents.section`
    background-color: ${({ theme }) => theme.text};
    ${({ theme }) => theme.section}
    height: 100vh;
`

const SubTitle = styledComponents.h2`
    ${({ theme }) => theme.title};
    color: #fff;
    animation: ${({ isShow }) => isShow ? slideUp : undefined} 1000ms 500ms ease-out both;
`

const Profile = styledComponents.div`
    display: flex;
    flex-direction: row;
    max-width: 1280px;
    animation: ${({ isShow }) => isShow ? slideUp : undefined} 1000ms 500ms ease-out both;
`

const ProfileImage = styledComponents.div`
    background: url(${({ image }) => image}) center 62% no-repeat;
    width: 400px; height: 400px;
	border-radius: 50%;
    margin-right: 160px;
`

const Description = styledComponents.p`
    color: #fff;
    max-width: 680px;
    font-size: 1.2rem;
    line-height: 32px;
    font-weight: bold;
`

const ResumeButton = styledComponents.a`
    display: inline-block;
    border: 2px solid #fff;
    font-size: 1.25rem;
    color: #fff;
    background-color: inherit;
    padding: 0.2em 0.8em;
    margin-top: 0.6em;
    cursor: pointer;
`

export const About = () => {
    const isShow = useScrollPosition(200, false);

    return (
        <Container theme={theme}>
            {isShow && 
            <>
                <SubTitle theme={theme} isShow={isShow}>About Me</SubTitle>
                <Profile isShow={isShow}>
                    <ProfileImage image={Image}></ProfileImage>
                    <Description>
                        가치 있는 개발자가 되기 위해 성장하는 웹 프론트엔드 개발자 권혁입니다. 
                        개발자는 비즈니스 감각을 통해 비즈니스 가치를 실현하는 사람이라고 믿으며, 
                        문제 해결의 가장 좋은 방법은 코드 바깥에 있다고도 생각합니다.
                        <br />
                        <br />
                        더 나은 문제 해결을 위해 새로운 기술과 분야에 대해 습득하는 것을 지향합니다.
                        또한 성장을 위한 문화나 몰입할 수 있는 환경을 좋아합니다.
                        <br />
                        <br />
                        다소 반복적이고 비효율적인 업무를 해소하기 위해 프로세스를 개선하거나 방법을 찾는 일을 좋아합니다.
                        운영팀의 업무를 효율적으로 하기 위해 부서 내 Apps_Scrpit를 도입하고 관련해서 세미나를 통해 지식을 공유한 경험이 있습니다.
                        <br />
                        <br />
                        👇 아래 버튼을 통해 이력서를 확인할 수 있습니다.
                        <br />
                        <ResumeButton href='https://drive.google.com/file/d/16rzKx5C4LwhEgenSKF53tS2MWl7-G6T8/view?usp=sharing' target='blank'>
                            Resume
                        </ResumeButton>
                    </Description>
                </Profile>
            </>
            }
        </Container>
    )
}