import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "./logo.svg";
import { ReactComponent as IconF } from "./icon-facebook.svg";
import { ReactComponent as IconY } from "./icon-youtube.svg";
import { ReactComponent as IconT } from "./icon-twitter.svg";
import { ReactComponent as IconP } from "./icon-pinterest.svg";
import { ReactComponent as IconI } from "./icon-instagram.svg";

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.darkBlue};
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    
`;

export const Logo = styled(LogoIcon)`
    margin: 20px;
`;

export const IconFacebook = styled(IconF)`
    
`;
export const IconYoutube = styled(IconY)`
`;
export const IconTwitter = styled(IconT)`
`;
export const IconPinterest = styled(IconP)`
`;
export const IconInstagram = styled(IconI)`
`;


export const IconContainer = styled.div`
    max-width: 250px;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    
    @media (max-width: 767px) {
        margin: 0 auto;
    }
`;

export const LinksContainer = styled.div`
     color: ${({ theme }) => theme.colors.white};
     display: flex;
     justify-content: space-between;
     align-items: center;
     max-width: 300px;
     margin: 20px;
   
     @media (max-width: 767px) {
        flex-direction: column;
        margin: auto;
    }
`;
export const Wrapper = styled.div`
    margin: 20px;
`;
export const Info = styled.p`
    color: ${({ theme }) => theme.colors.white};
`;

export const WrapperLinks = styled.div`
    display: flex;
    flex-direction: column;

`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    padding: 5px 10px;
    cursor: pointer;
`;
