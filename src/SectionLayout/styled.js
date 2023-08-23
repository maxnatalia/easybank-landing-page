import styled from "styled-components";

export const Section = styled.section`
    width: 100vw;
    background-color: ${({ theme, backgroundColor }) =>
        backgroundColor ? theme.colors.lightGrayishBlue : 'transparent'};
`;

export const Wrapper = styled.div`
    min-height: 670px;
    max-width: 1270px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    @media (max-width: 1199px) {
        padding: 40px 0;
        text-align: center;
    }
`;

export const Title = styled.h2`
    margin: 0;
    padding: 10px 20px;
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

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 290px);
    grid-gap: 20px;
    justify-content: space-between;

    @media (max-width: 1199px) {
      grid-template-columns: repeat(2, 290px);
      justify-content: center;
      grid-gap: 30px;
    }

    @media (max-width: 767px) {
      grid-template-columns: 80%;
    }
`;