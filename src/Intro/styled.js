import styled from "styled-components";
import bgdesktop from "./bg-intro-desktop.svg";
import bgmobile from "./bg-intro-mobile.svg";

export const IntroWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    width: 100%;

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column-reverse;
    }
`;

export const BackgroundIntro = styled.div`
    background-image: url("${bgdesktop}");
    background-repeat: no-repeat;
    background-position: left;
    position: relative;
    flex-grow: 2;

    @media (max-width: 767px) {
        background-image: url("${bgmobile}");
        margin: 0 auto;
        width: 100vw;
    }
  
`;

export const Image = styled.img`
    z-index: 30;
    position: sticky;
    transform: translateY(80px) translateX(220px);

    @media (max-width: 767px) {
        width: 100%;
        text-align: center;
        transform: unset;
    }
`;

export const Container = styled.div`
    padding-left: 130px;
    max-width: 600px;
    display: flex;
    flex-direction: column;

    @media (max-width: 767px) {
        max-width: 300px;
        padding-left: 0;
    }
`;

export const Title = styled.h1`
    font-weight: 300;
    font-size: 56px;
    color: ${({ theme }) => theme.colors.darkBlue};

    @media (max-width: 767px) {
        font-size: 36px;
    }
`;

export const Content = styled.p`
    color: ${({ theme }) => theme.colors.grayishBlue};
    font-weight: 300;
    margin-bottom: 50px;
    line-height: 1.5;

    @media (max-width: 767px) {
        font-size: 14px;
    }
`;


