import styled, { css } from "styled-components";

export const StyledButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    background: ${({ theme }) => theme.gradient.main};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    transition: all .3s ease-in;

    &:hover {
        filter: brightness(120%);
    }

    ${({ navigation }) => navigation && css`
        @media (max-width: 767px) {
            display: none;
        }
    `}
`;