import styled from "styled-components";
import mockup from "./image-mockups.png";
import bgdesktop from "./bg-intro-desktop.svg";
import bgmobile from "./bg-intro-mobile.svg";

export const StyledHeader = styled.header`
   background-color: transparent;
`;

export const Wrapper = styled.div`
    max-width: 1270px;
    height: 670px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    @media (max-width: 1199px) {
        height: 590px;
        flex-direction: column-reverse;
    }
`;

export const BoxContent = styled.div`
    max-width: 480px;
    padding-left: 20px;

    @media (max-width: 1199px) {
        text-align: center;
        padding: 10px;
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
    height: 118%;
    background-image: url("${mockup}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 132px 70%;

    @media (max-width: 1199px) {
        height: 100%;
        background-size: contain;
        background-position: center center;
    }

    @media (max-width: 479px) {
        height: 100%;
        background-size: cover;
        background-position: center bottom;
    }
`;








// export const StyledHeader = styled.header`
//     display: grid;
//     grid-template-columns: 1fr 66%;
//     align-items: center;
//     margin: 0 auto;
//     max-width: 1440px;
//     min-height: 770px;

//     background-color: aliceblue;

//     @media (max-width: 1024px) {
//         grid-template-columns: 1fr;
//         grid-template-rows: 50% 300px;
//         max-height: 600px;
//     }
// `;

// export const BoxContent = styled.div`
//     padding-left: 40px;

//     @media (max-width: 1024px) {
//         order: 2;
//         padding: 10px;
//         text-align: center;
//     }
// `;

// export const Title = styled.h1`
//     font-weight: 300;
//     font-size: 56px;
//     color: ${({ theme }) => theme.colors.darkBlue};

//     @media (max-width: 767px) {
//         font-size: 36px;
//     }
// `;

// export const Content = styled.p`
//     margin-bottom: 50px;
//     line-height: 1.5;
//     font-weight: 300;
//     color: ${({ theme }) => theme.colors.grayishBlue};

//     @media (max-width: 1024px) {
//         font-size: 14px;
//     }
// `;


// export const BoxImage = styled.div`
//     width: 100%;
//     height: 100%;
//     background-image: url("${bgdesktop}");
//     background-repeat: no-repeat;
//     background-size: 170%;
//     background-position: left center;

//     border: 2px solid red;

//     @media (max-width: 1024px) {
//         background-image: url("${bgmobile}");
//         background-position: right bottom -66px;
//         background-size: cover;
//         height: 60%;
//     }
// `;

// export const PhoneImage = styled.div`
//     width: 100%;
//     height: 118%;
//     background-image: url("${mockup}");
//     background-repeat: no-repeat;
//     background-position: center right -152px;
//     background-size: 94%;

//     @media (max-width: 1024px) {
//         background-position: center bottom 18px;
//         height: 100%;
//         scale: 1.3;
//         background-size: contain;
//     }
// ;`