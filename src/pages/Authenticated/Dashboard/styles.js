import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {Platform} from 'react-native';

import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.IOS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  padding: 20px;
  min-height: 200px;
`;

export const AwardsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: true,
  numColumns: 1,
})`
  margin-top: 60px;
  padding: 0 20px;
`;

export const Slot = styled(RectButton)`
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  flex: 1;
  align-items: center;
  margin: 0 10px 20px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 0px;
`;

export const Insidebox = styled.View`
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const AwardsView = styled.View`
  border-radius: 10px;
  background-color: #fff;
  margin-bottom: 20px;
  padding: 0px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 99%;
`;

export const Name = styled.Text`
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
  color: #000;
  text-align: center;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  height: 70px;
`;
