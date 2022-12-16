import { BackgroundIntro, Image, IntroWrapper, Container, Title, Content, Button } from "./styled";
import mockup from "./image-mockups.png";

const Intro = () => {
    return (
        <IntroWrapper>
            <Container>
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
            </Container>
            <BackgroundIntro>
                <Image src={mockup} alt="" />
            </BackgroundIntro>
        </IntroWrapper>
    );
};

export default Intro;