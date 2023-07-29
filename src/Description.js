import styled from 'styled-components/macro';
import CareerInfo from './CareerInfo';
import Heading from './Heading';
import Subheading from './Subheading';
import CustomerSignup from './CustomerSignup';
import TrialText from './TrialText';

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 100px 0px 0px 0px;
    width: 592px;
`


const Description = () => {
    return (
        <DescriptionContainer>
            <CareerInfo />
            <Heading />
            <Subheading />
            <CustomerSignup />
            <TrialText />
        </DescriptionContainer>
    )
}

export default Description;