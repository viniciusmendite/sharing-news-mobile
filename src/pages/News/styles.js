import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #303B45;
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  padding-bottom: 8px;
`;

export const HeaderText = styled.Text`
font-size: 36px;
font-weight: bold;
color: #FF7800;
`;

export const FlatList = styled.FlatList`
  padding-bottom: 0;
`;


export const Card = styled.TouchableOpacity`
  background: #3F3D56;
  padding: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
`;

export const Editor = styled.Text`
font-size: 12px;
color: #C0C0C0;
`;

export const EditorName = styled.Text`
color: #FF7800;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #FFF;
  margin-top: 8px;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const Description = styled.Text`
font-size: 14px;
color: #F5F5DC;
margin-top: 16px;
`;