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
  padding: 0px;
  min-height: 200px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  padding-horizontal: 20px;
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

export const InputAvatar = styled.TouchableOpacity`
  flex: 1;
  min-height: 140px;
  background-color: #e8ebf2;
  justify-content: center;
  align-items: center;
  padding-horizontal: 20px;
  margin-top: 20px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  height: 70px;
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
`;
