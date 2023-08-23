import SectionLayout from "../SectionLayout";
import { offeringData } from "./offeringData";
import { Name, Content } from "./styled";

const Offering = () => {
    return (
        <SectionLayout
            title={"Why choose Easybank?"}
            backgroundColor
            info={"We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before."}
        >
            {offeringData.map(({ id, title, icon, description }) => (
                <div key={id}>
                    <img src={icon} alt={title} />
                    <Name>{title}</Name>
                    <Content>{description}</Content>
                </div>
            ))}
        </SectionLayout>
    );
};

export default Offering;