import React from 'react'
import { Info, Section, Title, Wrapper } from './styled'

const SectionLayout = ({ title, backgroundColor, info, children }) => {
    return (
        <Section backgroundColor={backgroundColor}>
            <Wrapper>
                <Title>{title}</Title>
                {info && <Info>{info}</Info>}
                {children}
            </Wrapper>
        </Section>
    )
};

export default SectionLayout;