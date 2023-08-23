import styled from "styled-components";

export const Name = styled.h3`
    color: ${({ theme }) => theme.colors.darkBlue};
    font-weight: 300;
`;

export const Content = styled.p`
    color: ${({ theme }) => theme.colors.grayishBlue};
    font-weight: 300;
    font-size: 16px;
    line-height: 1.6;
`;