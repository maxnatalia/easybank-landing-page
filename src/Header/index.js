import { BoxContent, BoxImage, Content, Image, PhoneImage, StyledHeader, Title } from "./styled";

import { Button } from "../Button/Button";

const Header = () => {
    return (
        <StyledHeader>
            <BoxContent>
                <Title>
                    Next generation digital banking
                </Title>
                <Content>
                    Take your financial life online. Your Easybank account will be a one-stop-shop
                    for spending, saving, budgeting, investing, and much more.
                </Content>
                <Button>
                    Request Invite
                </Button>
            </BoxContent>
            <BoxImage><PhoneImage /></BoxImage>
        </StyledHeader>
    )
};

export default Header;