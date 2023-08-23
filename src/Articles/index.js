import { articlesData } from "./articlesData";
import SectionLayout from "../SectionLayout";
import { Article, Image, Author, Subtitle, Content, Box } from "./styled";

const Articles = () => {
    return (
        <SectionLayout title={"Latest Articles"}>
            {articlesData.map(({ id, title, image, person, content }) =>
                <Article key={id}>
                    <Image src={image} alt={title} />
                    <Box>
                        <Author>{person}</Author>
                        <Subtitle as="a" href="/">{title}</Subtitle>
                        <Content>{content}</Content>
                    </Box>
                </Article>
            )}
        </SectionLayout>
    );
};

export default Articles;