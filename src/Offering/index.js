import SectionLayout from "../SectionLayout";
import { offeringData } from "./offeringData";
import { Container, Offert, Name, Content } from "./styled";

const Offering = () => {
    return (
        <SectionLayout
            title={"Why choose Easybank?"}
            backgroundColor
            info={"We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before."}
        >
            <Container>
                {offeringData.map(({ id, title, icon, description }) => (
                    <Offert key={id}>
                        <img src={icon} alt={title} />
                        <Name>{title}</Name>
                        <Content>{description}</Content>
                    </Offert>
                ))}
            </Container>
        </SectionLayout>
    );
};

export default Offering;