import { useState } from "react";
import Button from "../Button";
import { ReactComponent as MobileClose } from "./icon-close.svg";
import { ReactComponent as MobileOpen } from "./icon-hamburger.svg";
import { navigationLinks } from "./data";
import {
    StyledNav,
    StyledLogo,
    LinksContainer,
    StyledNavLink,
    MobileNav,
    Wrapper,
    ButtonWrapper,
    Overlay
} from "./styled";

const Navigation = () => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(show => !show)
    };

    return (
        <>
            {show && <Overlay />}
            <StyledNav>
                <Wrapper>
                    <StyledLogo />
                    <MobileNav onClick={handleClick}>
                        {show ? <MobileClose /> : <MobileOpen />}
                    </MobileNav>
                    <LinksContainer show={show}>
                        {navigationLinks.map(({ name, href }) => <StyledNavLink
                            key={name}
                            href={href}
                            onClick={handleClick}
                        >
                            {name}
                        </StyledNavLink>
                        )}
                    </LinksContainer>
                    <ButtonWrapper>
                        <Button navigation />
                    </ButtonWrapper>
                </Wrapper>
            </StyledNav>
        </>
    );
};

export default Navigation;