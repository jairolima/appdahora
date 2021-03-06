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
  height: 60px;
  padding-horizontal: 20px;
  background-color: #fff;
  border-color: #ccc;
  border-bottom-width: 1px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 20px;
`;

export const Hr = styled.View`
  height: 1px;
  background-color: #ccc;
  align-self: center;
  width: 90%;
`;
