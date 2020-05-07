// TODO colocar padding top + status bar height
// import {getStatusBarHeight} from 'react-native-status-bar-height';

import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.IOS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: space-between;
  padding: 20px;
  min-height: 200px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #000;
  margin-top: 50px;
  margin-bottom: 40px;
  justify-content: center;
`;
