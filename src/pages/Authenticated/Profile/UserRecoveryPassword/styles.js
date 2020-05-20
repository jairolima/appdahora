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
  justify-content: space-between;
  padding: 20px;
  min-height: 200px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 60px;
  padding-horizontal: 30px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #000;
  padding-horizontal: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: center;
`;

export const Body = styled.View`
  flex: 1;
  padding: 20px;
  min-height: 200px;
`;

export const Footer = styled.View`
  padding: 20px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  height: 70px;
`;
