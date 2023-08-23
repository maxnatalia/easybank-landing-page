import styled from "styled-components";

export const StyledFooter = styled.footer`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.darkBlue};
`;

export const Container = styled.div`
    max-width: 1270px;
    margin: 0 auto;
    padding: 40px 20px 0 20px;
    display: grid;
    grid-template-columns: 15% 55% 30%;
    grid-template-rows: repeat(2, 1fr);

    @media (max-width: 991px) {
        padding: 30px 10px 0 10px;
        grid-template-columns: 1fr;
        grid-gap: 20px;
        align-items: center;
        justify-items: center;
    }
`;

export const IconContainer = styled.div`
    grid-column: 1;
    display: flex;
    justify-content: flex-start;
    gap: 10px;

    @media (max-width: 991px) {
        grid-row: 2;
        grid-gap: 20px;
        margin-top: 10px;
    }
`;

export const styledLogo = (IconLogo) => styled(IconLogo)`
    cursor: pointer;

    & path {
        transition: all .3s ease-in-out;
        fill: ${({ theme }) => theme.colors.white};
    }

    &:hover {
        & path {
            fill: ${({ theme }) => theme.colors.limeGreen};
        }
    }
`;

export const LinksContainer = styled.div`
    grid-column: 2;
    grid-row: 1 / span 2;
    justify-self: center;
    color: ${({ theme }) => theme.colors.white};
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 991px) {
        grid-column: 1;
        grid-row: 3;
        grid-template-columns: 1fr;
        text-align: center;
    }
`;

export const StyledLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    padding: 5px 10px;
    cursor: pointer;
    transition: all .3s ease-in;

    &:hover {
        color: ${({ theme }) => theme.colors.limeGreen};
    }
`;

export const ButtonWrapper = styled.div`
    grid-column: 3;
    grid-row: 1;
    justify-self: flex-end;

    @media (max-width: 991px) {
        grid-column: 1;
        grid-row: 4;
        justify-self: center;
    }
`;

export const Info = styled.p`
    color: ${({ theme }) => theme.colors.white};
    grid-column: 3;
    grid-row: 2;
    line-height: 1.6;
    justify-self: flex-end;

    @media (max-width: 991px) {
        grid-column: 1;
        grid-row: 5;
        justify-self: center;
    }
`;

export const ExtraInfo = styled.p`
    grid-column: 1 / span 3;
    padding-top: 20px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.white};
    border-top: 1px solid ${({ theme }) => theme.colors.white};

    & a {
        color: ${({ theme }) => theme.colors.limeGreen};
        transition: all .3s ease-in;

        &:hover {
            color: ${({ theme }) => theme.colors.white};
        }
    }

    @media (max-width: 991px) {
        grid-column: 1;
    }
`;