import styled from "styled-components";
import { ReactComponent as Logo } from "./logo.svg";

export const StyledNav = styled.nav`
    width: 100%;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.white};
    position: sticky;
    z-index: 600;
`;

export const Wrapper = styled.div`
    max-width: 1270px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

export const StyledLogo = styled(Logo)`
    padding-left: 20px;
    cursor: pointer;
`;

export const LinksContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 767px) {
        opacity: ${({ show }) => show ? "1" : "0"};
        visibility: ${({ show }) => show ? "visible" : "hidden"};
        flex-direction: column;
        position: absolute;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 100;
        width: 90%;
        padding: 20px 0;
        text-align: center;
        background-color: ${({ theme }) => theme.colors.white};
        border-radius: 5px;
        box-shadow: 2px 2px 30px ${({ theme }) => theme.colors.darkBlue};
    }
`;

export const StyledNavLink = styled.a`
    padding: 16px 8px;
    text-decoration: none;
    letter-spacing: 2px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.grayishBlue};
    cursor: pointer;
    transition: all .3s ease-in-out;
    position: relative;

    &:hover {
        color: ${({ theme }) => theme.colors.darkBlue};

        &::after {
            content: '';
            position: absolute;
            bottom: -6px;
            left: 0;
            width: 100%;
            height: 6px;
            background-image: ${({ theme }) => theme.gradient.main};

            @media (max-width: 767px) {
                display: none;
            }
        }
    }

    @media (max-width: 767px) {
        padding: 12px;
        letter-spacing: 1px;
        font-size: 22px;
        color: ${({ theme }) => theme.colors.darkBlue};

        &:hover {
            color: ${({ theme }) => theme.colors.limeGreen};
        }
    }
`;

export const ButtonWrapper = styled.div`
    padding: 10px 190px 10px 0;

    @media (max-width: 1199px) {
        padding-right: 20px;
    }
`;

export const MobileNav = styled.div`
    display: none;

    @media (max-width: 767px) {
        display: block;
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }
`;

export const Overlay = styled.div`
    display: none;

    @media (max-width: 767px) {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 500;
        background-image: linear-gradient(${({ theme }) => theme.colors.darkBlue}, ${({ theme }) => theme.colors.lightGrayishBlue});
        opacity: .8;
    }
`;