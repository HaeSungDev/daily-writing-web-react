import AppBar from '@material-ui/core/AppBar';
import styled from 'styled-components';

import MainLogo from './MainLogo';

const StyledAppBar = styled(AppBar)`
  height: 3rem;
`;

export default function MainHeader() {
  return (
    <StyledAppBar color="transparent">
      <MainLogo />
    </StyledAppBar>
  );
}
