import { ReactComponent as IconF } from "./icon-facebook.svg";
import { ReactComponent as IconY } from "./icon-youtube.svg";
import { ReactComponent as IconT } from "./icon-twitter.svg";
import { ReactComponent as IconP } from "./icon-pinterest.svg";
import { ReactComponent as IconI } from "./icon-instagram.svg";
import { styledLogo } from "./styled";

export const linksData = [
    "About Us",
    "Contact",
    "Blog",
    "Careers",
    "Support",
    "Privacy Policy",
];

export const socialMedia = [
    {
        name: "Facebook",
        link: "https://facebook.com/",
        IconLogo: styledLogo(IconF),
    },
    {
        name: "Instagram",
        link: "https://instagram.com",
        IconLogo: styledLogo(IconI),
    },
    {
        name: "Pinterest",
        link: "https://pinterest.com",
        IconLogo: styledLogo(IconP),
    },
    {
        name: "Twitter",
        link: "https://twitter.com",
        IconLogo: styledLogo(IconT),
    },
    {
        name: "Youtube",
        link: "https://youtube.com",
        IconLogo: styledLogo(IconY),
    }
];