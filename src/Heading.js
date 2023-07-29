import styled from 'styled-components/macro';


const HeadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 800;
    font-family: Inter;
    font-size: 72px;
    line-height: 72px;
    color: #FFFFFF;
    margin-top: 20px;
`
const IndigoText = styled.div`
    color: #818CF8;
`


const Heading = () => {
    return (
        <HeadingContainer>
            <div>A better way to</div>
            <IndigoText>ship web apps</IndigoText>
        </HeadingContainer>
    )
}

export default Heading;