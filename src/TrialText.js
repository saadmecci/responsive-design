import styled from 'styled-components/macro';


const TrialTextContainer = styled.div`
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 400;
    color: #D1D5DB;
`
const WhiteText = styled.span`
    color: #FFFFFF;
`

const TrialText = () => {
    return (
        <TrialTextContainer>
            <p>Start your free 14-day trial, no credit card necessary. By providing your email, you agree to our <WhiteText>terms or service</WhiteText>.</p>
        </TrialTextContainer>
    )
}

export default TrialText;