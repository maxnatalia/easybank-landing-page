import { useState } from "react";
import { Button } from "../Button/Button";
import { ReactComponent as MobileClose } from "./icon-close.svg";
import { ReactComponent as MobileOpen } from "./icon-hamburger.svg";
import { StyledNav, StyledLogo, LinksContainer, StyledNavLink, MobileNav, Wrapper, ButtonWrapper, Overlay } from "./styled";

const Navigation = () => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show)
    };

    return (
        <>
            {!show && <Overlay />}
            <StyledNav>
                <Wrapper>
                    <StyledLogo />
                    <MobileNav onClick={handleClick}>
                        {show ? <MobileOpen /> : <MobileClose />}
                    </MobileNav>
                    <LinksContainer show={show}>
                        <StyledNavLink href="/">Home</StyledNavLink>
                        <StyledNavLink href="/">About</StyledNavLink>
                        <StyledNavLink href="/">Contact</StyledNavLink>
                        <StyledNavLink href="/">Blog</StyledNavLink>
                        <StyledNavLink href="/">Careers</StyledNavLink>
                    </LinksContainer>
                    <ButtonWrapper>
                        <Button navigation>Request Invite</Button>
                    </ButtonWrapper>
                </Wrapper>
            </StyledNav>
        </>
    );
};

export default Navigation;