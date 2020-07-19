import BorderColorIcon from "@material-ui/icons/BorderColor";
import styled from "styled-components";

const Title = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 0.5rem;
  margin-bottom: 0.1rem;
  color: #8d6e63;
`

const Container = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  padding: 0rem 0.5rem;
`

export default function MainLogo() {
  return (
    <Container>
      <BorderColorIcon />
      <Title>Daily Writing</Title>
    </Container>
  );
}