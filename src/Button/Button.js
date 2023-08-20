import styled, { css } from "styled-components";

export const Button = styled.button`
    width: max-content;
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    background: linear-gradient(90deg, rgba(49,211,92,1) 0%, rgba(43,183,218,1) 100%);
    font-size: 16px;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;

    &:hover {
        filter: brightness(120%);
    }

    ${({ navigation }) => navigation && css`
        @media (max-width: 767px) {
            display: none;
        }
    `}
`;