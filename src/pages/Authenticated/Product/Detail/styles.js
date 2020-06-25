// TODO colocar padding top + status bar height
// import {getStatusBarHeight} from 'react-native-status-bar-height';

import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.IOS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
`;

export const Header = styled.View`
  padding-top: 50px;
  padding-horizontal: 20px;
  height: 100px;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  border-color: #ccc;
  border-bottom-width: 1px;
`;

export const Hr = styled.View`
  height: 1px;
  background-color: #ccc;
`;
