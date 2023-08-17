import styled from "styled-components";
import mockup from "./image-mockups.png";
import bgdesktop from "./bg-intro-desktop.svg";
// import bgmobile from "./bg-intro-mobile.svg";

export const StyledHeader = styled.header`
    display: grid;
    grid-template-columns: minmax(30%, 500px) 1fr;
    align-items: center;
    margin: 0 auto;
    max-width: 1270px;
    min-height: 670px;
`;

export const BoxContent = styled.div`
    padding-left: 40px;
    margin: 0 auto;
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
    margin-bottom: 50px;
    line-height: 1.5;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.grayishBlue};

    @media (max-width: 767px) {
        font-size: 14px;
    }
`;


export const BoxImage = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("${bgdesktop}");
    background-repeat: no-repeat;
    background-size: 180%;
    background-position: left -2vw center;
`;

export const PhoneImage = styled.div`
    width: 100%;
    height: 120%;
    background-image: url("${mockup}");
    background-repeat: no-repeat;
    background-position: left 8vw center;
    background-size: 100%;
;`