import {
    FooterContainer,
    ImgLink,
    Logo,
    FooterTitle,
    FooterLinkContainer,
    FooterSubTitle
} from "../styles/Footer";

import FacebookLogo from "../assets/facebook.png"
import GithubLogo from "../assets/github.png"
import TelegramLogo from "../assets/telegram.png"
import TwitterLogo from "../assets/twitter.png"
import InstagramLogo from "../assets/instagram.png"
import LinkedinLogo from "../assets/linkedin.png"





function Footer() {
    return (
        <FooterContainer>
            <FooterTitle>Redes Sociais</FooterTitle>
            <FooterLinkContainer>
                <ImgLink href="https://www.facebook.com/" target='_blank' >
                    <Logo src={FacebookLogo}>
                    </Logo>
                </ImgLink>
                <ImgLink href="https://www.github.com/" target='_blank' >
                    <Logo src={GithubLogo}>
                    </Logo>
                </ImgLink>
                <ImgLink href="https://web.telegram.org/" target='_blank' >
                    <Logo src={TelegramLogo}>
                    </Logo>
                </ImgLink>
                <ImgLink href="https://www.twitter.com/" target='_blank' >
                    <Logo src={TwitterLogo}>
                    </Logo>
                </ImgLink>
                <ImgLink href="https://www.instagram.com/" target='_blank' >
                    <Logo src={InstagramLogo}>
                    </Logo>
                </ImgLink>
                <ImgLink href="https://www.linkedin.com/" target='_blank' >
                    <Logo src={LinkedinLogo}>
                    </Logo>
                </ImgLink>               
            </FooterLinkContainer>
            <FooterSubTitle>@Todos os Direitos Reservados</FooterSubTitle>
        </FooterContainer>
    );
}

export default Footer;