import Button from "../Button";
import { ReactComponent as Logo } from "./logo.svg";
import { linksData, socialMedia } from "./data";
import {
    StyledFooter,
    IconContainer,
    LinksContainer,
    Info,
    Container,
    StyledLink,
    ButtonWrapper,
    ExtraInfo
} from "./styled";

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Logo />
                <IconContainer>
                    {socialMedia.map(({ name, link, IconLogo }) => <a
                        key={name}
                        href={link}
                        target="_blank"
                        rel="noreferrer">
                        <IconLogo title={name} />
                    </a>
                    )}
                </IconContainer>
                <LinksContainer>
                    {linksData.map((name, index) => <StyledLink
                        key={`${index} - ${name}`}
                        href="/"
                    >
                        {name}
                    </StyledLink>
                    )}
                </LinksContainer>
                <ButtonWrapper>
                    <Button />
                </ButtonWrapper>
                <Info>
                    © Easybank. All Rights Reserved.
                </Info>
                <ExtraInfo>
                    Challenge by{" "}
                    <a
                        href="https://www.frontendmentor.io?ref=challenge"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Frontend Mentor
                    </a>.
                    Coded by Natalia Mazur-Żurek.
                </ExtraInfo>
            </Container>
        </StyledFooter>
    );
};

export default Footer;