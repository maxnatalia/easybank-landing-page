import { linksData } from "./linksData";
import { StyledFooter, Logo, IconContainer, LinksContainer, Button, Info, IconFacebook, IconInstagram, IconPinterest, IconTwitter, IconYoutube, WrapperLinks,StyledLink } from "./styled";

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
            <div>
                <Button>
                    Request Invite
                </Button>
                <Info>
                    © Easybank. All Rights Reserved
                </Info>
            </div>

        </StyledFooter>);
};

export default Footer;