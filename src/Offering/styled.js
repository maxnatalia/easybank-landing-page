import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 280px);
    grid-template-rows: 1fr;
    justify-content: space-between;
    align-items: center;
    grid-gap: 20px;

    @media (max-width: 1199px) {
        grid-template-columns: repeat(2, 280px);
        grid-template-rows: repeat(2, 1fr);
        justify-content: center;
    }

    @media (max-width: 767px) {
        grid-template-columns: 280px;
        grid-template-rows: repeat(4, 1fr);
        justify-content: center;
    }
`;

export const Offert = styled.div`
    /* max-width: 280px; */
`;

export const Name = styled.h3`
    color: ${({ theme }) => theme.colors.darkBlue};
    font-weight: 300;
`;

export const Content = styled.p`
    color: ${({ theme }) => theme.colors.grayishBlue};
    font-weight: 300;
    font-size: 16px;
    line-height: 1.6;
`;
