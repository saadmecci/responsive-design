import styled from 'styled-components/macro';
import chevronRight from './assets/chevronRight.png'

const CareerInfoContainer = styled.div`
    display: flex;
    color: #FFFFFF;
    padding: 4px 8px 4px 4px;
    background-color: #000000;
    font-family: Inter;
    height: 32px;
    border-radius: 14px;
    width: 300px;
`
const HiringContainer = styled.div`
    background-color: #6366F1;
    border: transparent;
    border-radius: 10px;
    padding: 2px 12px 2px 12px;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    margin-right: 10px;
    line-height: 24px;
`
const CareerContainer = styled.div`
    background-color: transparent;
    border: transparent;
    color: #FFFFFF;
    padding: 5px 12px 2px 12px;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
`

const LogoContainer = styled.div`
    margin-top: 5px;
`


const CareerInfo = () => {
    return (
        <CareerInfoContainer>
            <HiringContainer>WE'RE HIRING</HiringContainer>
            <CareerContainer>Visit our careers page</CareerContainer>
            <LogoContainer><img src={chevronRight} alt="Right chevron"/></LogoContainer>
        </CareerInfoContainer>
    )
}

export default CareerInfo;