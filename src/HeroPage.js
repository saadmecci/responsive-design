import styled, { createGlobalStyle } from 'styled-components/macro';
import NavigationBar from './NavigationBar';
import Content from './Content';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const HeroContainer = styled.div`
    background-color: #111827;
    height: 100vh;
    width: 100%;
`


const HeroPage = () => {
    return (
        <>
            <GlobalStyle />
            <HeroContainer>
                <NavigationBar />
                <Content />
            </HeroContainer>
        </>
    )
}

export default HeroPage;