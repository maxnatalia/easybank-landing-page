import { useState } from "react";
import { Button } from "../Button/Button";
import { StyledNav, StyledLogo, LinksContainer, StyledNavLink, MobileClose, MobileOpen, MobileNav } from "./styled";

const Navigation = () => {

    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show)
    };
    return (
        <StyledNav>
            <StyledLogo />
            <MobileNav onClick={handleClick}>
                {show ? <MobileOpen /> : <MobileClose />}

            </MobileNav>
            <LinksContainer show={show}>
                <StyledNavLink>Home</StyledNavLink>
                <StyledNavLink>About</StyledNavLink>
                <StyledNavLink>Contact</StyledNavLink>
                <StyledNavLink>Blog</StyledNavLink>
                <StyledNavLink>Careers</StyledNavLink>
            </LinksContainer>
            <Button navigation>Request Invite</Button>
        </StyledNav>);
};

export default Navigation;