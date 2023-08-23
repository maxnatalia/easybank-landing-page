import {
    Info,
    Section,
    Title,
    Wrapper,
    Container
} from './styled'

const SectionLayout = ({ title, backgroundColor, info, children }) => {
    return (
        <Section backgroundColor={backgroundColor}>
            <Wrapper>
                <Title>{title}</Title>
                {info && <Info>{info}</Info>}
                <Container>
                    {children}
                </Container>
            </Wrapper>
        </Section>
    )
};

export default SectionLayout;