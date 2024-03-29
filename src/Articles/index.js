import SectionLayout from "../SectionLayout";
import { articlesData } from "./articlesData";
import {
    Article,
    Image,
    Author,
    Subtitle,
    Content,
    Box
} from "./styled";

const Articles = () => {
    return (
        <SectionLayout title={"Latest Articles"}>
            {articlesData.map(({ id, title, image, person, content }) =>
                <Article key={id}>
                    <Image src={image} alt={title} />
                    <Box>
                        <Author>{person}</Author>
                        <Subtitle role="h3" href="#hero">
                            {title}
                        </Subtitle>
                        <Content>{content}</Content>
                    </Box>
                </Article>
            )}
        </SectionLayout>
    );
};

export default Articles;