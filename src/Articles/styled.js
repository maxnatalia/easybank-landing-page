import styled from "styled-components";

export const Article = styled.article`
    display: flex;
    flex-direction: column;
    height: 100%;
    box-shadow: 4px 6px 50px 5px ${({ theme }) => theme.colors.lightGrayishBlue};
`;

export const Image = styled.img`
    width: 100%;
    height: 50%;
    object-fit: cover;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
`;

export const Box = styled.div`
    flex:1;
    padding: 10px 10px 20px 10px;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const Author = styled.p`
    margin-top: 20px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.grayishBlue};
`;

export const Subtitle = styled.a`
    display: block;
    margin: 10px 0;
    letter-spacing: .5px;
    line-height: 1.2;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkBlue};
    font-weight: 100;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover {
        color: ${({ theme }) => theme.colors.limeGreen};
    }

    @media (max-width: 767px) {
        font-size: 16px;
        line-height: 1.2;
    }
`;

export const Content = styled.p`
    margin: 0;
    font-size: 16px;
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.grayishBlue};

    @media (max-width: 767px) {
        font-size: 14px;
        line-height: 1.2;
    }
`;