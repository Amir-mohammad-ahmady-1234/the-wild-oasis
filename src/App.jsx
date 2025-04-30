import styled from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;


const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;

const App = () => {
  return (
    <>
    <GlobalStyles />
    <StyledApp>
      <H1>The Wild Oasis</H1>
      <Button onClick={() => alert("check in")}>check in</Button>
      <Button onClick={() => alert("check out")}>check out</Button>

      <Input type="number" placeholder="Number of  guests" />
      <Input type="number" placeholder="Number of  guests" />
    </StyledApp>
    </>
  );
};

export default App;
