import styled, { css } from "styled-components";

export const Button = styled.button`
    padding: 10px 20px;
    border-radius: 25px;
    color: ${({ theme }) => theme.colors.white};
    border: none;
    background: linear-gradient(90deg, rgba(49,211,92,1) 0%, rgba(43,183,218,1) 100%);
    cursor: pointer;
    width: max-content;

    &:hover {
        filter: brightness(110%);
    }

    @media (max-width: 767px) {
       align-self: center;
    }

    ${({ navigation }) => navigation && css`
        @media (max-width: 767px) {
            display: none;
        }
    `}
`;