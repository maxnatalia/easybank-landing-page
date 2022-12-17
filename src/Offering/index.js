import { offeringData } from "./offeringData";
import { OfferingContent, Title, Info, Container, Offert, Icon, Subtitle, Content } from "./styled";

const Offering = () => {
    return (
        <OfferingContent>
            <Title> Why choose Easybank?</Title>
            <Info> We leverage Open Banking to turn your bank account into your financial hub. Control
                your finances like never before.</Info>
            <Container>
                {offeringData.map((item) => (
                    <Offert key={item.id}>
                        <Icon src={item.icon} alt={item.title} />
                        <Subtitle>{item.title}</Subtitle>
                        <Content>{item.description}</Content>
                    </Offert>
                ))}
            </Container>
        </OfferingContent>
    );
};

export default Offering;