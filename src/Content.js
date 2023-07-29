import styled from 'styled-components/macro';
import Description from './Description';
import illustration from './assets/illustration.svg';


const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 42px;
`
const IllustrationContainer = styled.div`

`

const Content = () => {
    return (
        <ContentContainer>
            <Description />
            <IllustrationContainer>
                <img src={illustration} alt="Abstract flowchart"/>
            </IllustrationContainer>
        </ContentContainer>
    )
}

export default Content;