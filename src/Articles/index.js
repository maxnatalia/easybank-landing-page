import { articlesData } from "./articlesData";
import { Title, Article, Image, Author, Subtitle, Content, Container, ArticleContainer } from "./styled";

const Articles = () => {
    return (
        <ArticleContainer>
            <Title>Latest Articles</Title>
            <Container>
                {articlesData.map(({ id, title, image, person, content }) =>
                    <Article key={id}>
                        <Image src={image} alt={title} />
                        <Author>{person}</Author>
                        <Subtitle>{title}</Subtitle>
                        <Content>{content}</Content>
                    </Article>
                )}
            </Container>
        </ArticleContainer>
    );
};

export default Articles;