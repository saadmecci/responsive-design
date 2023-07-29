import styled from 'styled-components/macro';
import { FreeTrialFormButton } from './Buttons';


const CustomerSignupForm = styled.form`
    display: flex;
    margin-top: 20px;
`
const CustomerInput = styled.input`
    width: 425px;
    height: 20px;
    border-radius: 6px;
    padding: 12px 16px 12px 16px;
    margin-right: 10px;
`


const CustomerSignup = () => {
    return (
        <CustomerSignupForm>
            <CustomerInput type="text" />
            <FreeTrialFormButton type="submit">Start Free Trial</FreeTrialFormButton>
        </CustomerSignupForm>
    )
}

export default CustomerSignup;