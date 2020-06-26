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
  flex-direction: row;
  align-items: center;
  padding-top: 60px;
  padding-horizontal: 30px;
`;

export const Adress = styled.View`
  height: 100px;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 20px;
`;

export const Hr = styled.View`
  height: 1px;
  background-color: #ccc;
`;

export const ProductsView = styled.View`
  margin-bottom: 0px;
  border-radius: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  align-items: center;
  height: 95px;
  width: 98%;
  background-color: #fff;
`;
