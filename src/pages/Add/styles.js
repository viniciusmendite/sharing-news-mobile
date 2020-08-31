import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #303B45;
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
`;

export const PageScroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator:false,
})``;

export const HeaderText = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: #FF7800;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
font-size:14px;
font-weight:bold;
color: #FAEBD7;
margin-bottom: 5px;
`;

export const Input = styled.TextInput`
width: 100%;
font-size: 14px;
color: #fff;
border-bottom-width: 1px;
border-bottom-color: #fff;
margin-bottom: 20px;
`;

export const PublishButton = styled.TouchableOpacity`
width:80%;
background: #FF7800;
padding: 16px;
align-items: center;
align-self: center;
border-radius: 8px;
margin-top: 36px;
`;

export const PublishButtonText = styled.Text`
font-size: 16px;
font-weight: bold;
`;
