import Button from "../Button";
import {
    BoxContent,
    BoxImage,
    Content,
    PhoneImage,
    StyledHeader,
    Title,
    Wrapper
} from "./styled";

const Header = () => {
    return (
        <StyledHeader>
            <Wrapper>
                <BoxContent>
                    <Title>
                        Next generation digital banking
                    </Title>
                    <Content>
                        Take your financial life online. Your Easybank account will be a one-stop-shop
                        for spending, saving, budgeting, investing, and much more.
                    </Content>
                    <Button />
                </BoxContent>
                <BoxImage>
                    <PhoneImage />
                </BoxImage>
            </Wrapper>
        </StyledHeader>
    )
};

export default Header;