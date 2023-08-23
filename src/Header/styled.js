import styled from "styled-components";
import mockup from "./image-mockups.png";
import bgdesktop from "./bg-intro-desktop.svg";
import bgmobile from "./bg-intro-mobile.svg";

export const StyledHeader = styled.header`
   background-color: transparent;
`;

export const Wrapper = styled.div`
    max-width: 1270px;
    margin: 0 auto;
    height: 670px;
    display: flex;
    align-items: center;

    @media (max-width: 1199px) {
        flex-direction: column-reverse;
    }
`;

export const BoxContent = styled.div`
    max-width: 480px;
    padding-left: 20px;

    @media (max-width: 1199px) {
        text-align: center;
        padding: 10px;
        margin-bottom: 60px;
    }
`;

export const Title = styled.h1`
    font-weight: 300;
    font-size: 56px;
    color: ${({ theme }) => theme.colors.darkBlue};

    @media (max-width: 1199px) {
        font-size: 36px;
        font-weight: 400;
    }
`;

export const Content = styled.p`
    margin-bottom: 50px;
    line-height: 1.5;
    font-weight: 300;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.grayishBlue};

    @media (max-width: 1199px) {
        font-size: 14px;
    }
`;

export const BoxImage = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("${bgdesktop}");
    background-repeat: no-repeat;
    background-position: -26px -255px;

    @media (max-width: 1199px) {
        background-image: url("${bgmobile}");
        background-size: cover;
        background-position: center center;
    }
`;

export const PhoneImage = styled.div`
    width: 100%;
    height: 120%;
    background-image: url("${mockup}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 132px 80%;

    @media (max-width: 1199px) {
        height: 104%;
        background-size: contain;
        background-position: center;
    }

    @media (max-width: 479px) {
        height: 92%;
        background-size: cover;
        background-position: center bottom;
    }
`;