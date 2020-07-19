import styled from 'styled-components';

import MainHeader from './MainHeader';

const Container = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;

export default function MainContainer(props) {
  return (
    <>
      <MainHeader />
      <Container>
        {props.children}
      </Container>
    </>
  );
}
