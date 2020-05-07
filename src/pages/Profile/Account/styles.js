// TODO colocar padding top + status bar height
// import {getStatusBarHeight} from 'react-native-status-bar-height';

import styled from 'styled-components/native';
import {Platform} from 'react-native';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.IOS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const LogoutButton = styled(Button)`
  margin-top: 5px;
  background: #f64c75;
  width: 100%;
`;

export const LoginButton = styled(Button)`
  margin-top: 5px;
  background: #3cf0c5;
  width: 100%;
`;

export const ProfileButton = styled(Button)`
  margin-top: 5px;
  background: #494949;
  width: 100%;
`;