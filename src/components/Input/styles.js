import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: 56px;
  background: #fff;
  border-radius: 22px;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#AEAEAE',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #aeaeae;
`;
