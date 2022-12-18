import styled from "styled-components";

export const OfferingContent = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.lightGrayishBlue};
    z-index: 50;
    padding: 110px 130px;
    margin-top: 80px;

    @media (max-width: 767px) {
        padding: 20px;
    }

`;
export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.darkBlue};
    font-weight: 300;

    @media (max-width: 767px) {
        text-align: center;
    }
`;

export const Info = styled.p`
    color: ${({ theme }) => theme.colors.grayishBlue};
    font-weight: 300;
    max-width: 650px;

    @media (max-width: 767px) {
        text-align: center;
    }
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

    @media (max-width: 767px) {
        text-align: center;
    }
    
`;

export const Offert = styled.div`
    padding: 30px 20px 30px 0;
`;
export const Icon = styled.img`
`;
export const Subtitle = styled.h3`
    color: ${({ theme }) => theme.colors.darkBlue};
    font-weight: 300;
`;
export const Content = styled.p`
    color: ${({ theme }) => theme.colors.grayishBlue};
    font-weight: 300;
    line-height: 1.5;
`;