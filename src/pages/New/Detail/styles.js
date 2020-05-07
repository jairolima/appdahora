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

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 60px;
  padding-horizontal: 30px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;
