// TODO colocar padding top + status bar height
// import {getStatusBarHeight} from 'react-native-status-bar-height';

import styled from 'styled-components/native';
import {Platform} from 'react-native';

import GlobalButton from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.IOS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 24px;
`;

export const Logo = styled.Image`
  width: 105px;
  height: 132px;
  resize-mode: contain;
`;

export const Phrase = styled.Text`
  text-align: center;
  width: 200px;
  margin-vertical: 40px;
  color: 'rgba(0, 0, 0, 0.6)';
  font-size: 14px;
  line-height: 23px;
`;

export const Btns = styled.View`
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
`;

export const SubmitButton = styled(GlobalButton)`
  margin-bottom: 8px;
  height: 70px;
`;
