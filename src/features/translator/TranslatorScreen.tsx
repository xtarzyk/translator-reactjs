import styled from "styled-components"
import { useTranslations } from "lib/hooks"

export const TranslatorScreen: React.FunctionComponent = () => {
    return (
        <Container>
            
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    color: ${({ theme }) => theme.colors.typography}
`