import styled from "styled-components";

export const Section = styled.section`
    width: 100vw;
    background-color: ${({ theme, backgroundColor }) =>
        backgroundColor ? theme.colors.lightGrayishBlue : 'transparent'};

    @media (max-width: 767px) {
        /* margin: 40px auto; */

    }
`;

export const Wrapper = styled.div`
    min-height: 670px;
    max-width: 1270px;
    margin: 0 auto;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    @media (max-width: 1199px) {
        padding: 40px 20px;
        text-align: center;
    }
`;

export const Title = styled.h2`
    margin: 0;
    color: ${({ theme }) => theme.colors.darkBlue};
    font-weight: 300;
    font-size: 34px;
`;

export const Info = styled.p`
    margin: 0 0 40px 0;
    color: ${({ theme }) => theme.colors.grayishBlue};
    font-weight: 300;
    line-height: 1.7;
    max-width: 650px;

    @media (max-width: 1199px) {
        font-size: 16px;
        margin: 0 auto;
    }
`;