import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    margin: 60px auto;
    padding: 40px 100px;
    background-color: ${({ theme, backgroundColor }) =>
        backgroundColor ? theme.colors.lightGrayishBlue : 'transparent'};

    @media (max-width: 767px) {
        margin: 40px auto;
        padding: 20px;
    }
`;

export const Wrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.darkBlue};
    font-weight: 300;
    font-size: 34px;
`;

export const Info = styled.p`
    color: ${({ theme }) => theme.colors.grayishBlue};
    font-weight: 300;
    line-height: 1.7;
    max-width: 650px;

    @media (max-width: 767px) {
        font-size: 16px;
    }
`;