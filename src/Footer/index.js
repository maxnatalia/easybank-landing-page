import { StyledFooter, Logo, IconContainer, LinksContainer, Info, IconFacebook, IconInstagram, IconPinterest, IconTwitter, IconYoutube, WrapperLinks, StyledLink, Wrapper } from "./styled";
import { Button } from "../Button/Button";

const Footer = () => {
    return (
        <StyledFooter>
            <div>
                <Logo />
                <IconContainer>
                    <IconFacebook />
                    <IconInstagram />
                    <IconPinterest />
                    <IconTwitter />
                    <IconYoutube />
                </IconContainer>
            </div>
            <div>
                <LinksContainer>
                    <WrapperLinks>
                        <StyledLink to='/' >About Us</StyledLink>
                        <StyledLink to='/'>Contact</StyledLink>
                        <StyledLink to='/'>Blog</StyledLink>
                    </WrapperLinks>
                    <WrapperLinks>
                        <StyledLink to='/'>Careers</StyledLink>
                        <StyledLink to='/'>Support</StyledLink>
                        <StyledLink to='/'>Privacy Policy</StyledLink>
                    </WrapperLinks>
                </LinksContainer>
            </div>
            <Wrapper>
                <Button>
                    Request Invite
                </Button>
                <Info>
                    © Easybank. All Rights Reserved
                </Info>
            </Wrapper>

        </StyledFooter>);
};

export default Footer;