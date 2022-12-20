import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as Close } from "./icon-close.svg";
import { ReactComponent as Open } from "./icon-hamburger.svg";

export const StyledNav = styled.nav`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    z-index: 300;
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    height: 60px;
`;
export const StyledLogo = styled(Logo)`
    @media (max-width: 767px) {
        display: flex;
        justify-self: flex-start;
        align-self: center;
        margin: 15px;
        font-size: 20px;
        position: absolute;
        left: 20px;
        top: 10px;
        cursor: pointer;
        z-index: 50;
    }
`;

export const LinksContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 767px) {
        opacity: ${({ show }) => !show ? "1" : "0"};
        visibility: ${({ show }) => !show ? "visible" : "hidden"};
        flex-direction: column;
        position: absolute;
        top: 80px;
        background-color: red;
        width: 80%;
        text-align: center;
    }
`;
export const StyledNavLink = styled(NavLink)`
    padding: 20px;
    text-decoration: none;

    
`;

export const MobileClose = styled(Close)`
`;

export const MobileOpen = styled(Open)`
`;

export const MobileNav = styled.div`
    display: none;

    @media (max-width: 767px) {
        display: flex;
        justify-self: flex-end;
        align-self: center;
        margin: 15px;
        font-size: 20px;
        position: absolute;
        right: 20px;
        top: 10px;
        cursor: pointer;
        z-index: 50;
    }
`;