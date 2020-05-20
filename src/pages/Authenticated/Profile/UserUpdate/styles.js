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
  padding-horizontal: 20px;
  min-height: 200px;
  margin-top: 20px;
`;

export const MenuItem = styled.View`
  margin-bottom: 10px;
  shadow-radius: 10px;
  shadow-opacity: 0.08;
  margin-bottom: 8px;
`;

export const ButtonCircle = styled.View`
  height: 48px;
  width: 48px;
  border-radius: 24px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  shadow-radius: 10px;
  shadow-opacity: 0.08;
  margin-bottom: 8px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  height: 70px;
`;

export const HeaderAvatar = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #e7ecf2;
`;

export const Footer = styled.View`
  padding-vertical: 20px;
`;
