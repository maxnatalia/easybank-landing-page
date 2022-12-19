import styled from "styled-components";

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.darkBlue};
    font-weight: 300;
`;

export const ArticleContainer = styled.div`
    padding: 110px 130px;
    width: 100%;

    @media (max-width: 767px) {
        padding: 20px;
    }
`;


export const Article = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 270px;
    padding: 20px;
  
`;

export const Image = styled.img`
   width: 270px;
   height: 170px;
   text-align: center;
   border-radius: 5px;
`;

export const Subtitle = styled.h3`
`;

export const Author = styled.p`
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 20px;
    justify-items: center;

    @media (max-width: 767px) {
        
    }
`;

export const Content = styled.p`
    flex-grow: 2;
`;
