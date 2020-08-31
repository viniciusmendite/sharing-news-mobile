import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight() + 24}px;
  background: #3F3D56;
`;

export const Header  = styled.View`
  padding: 0 24px;
  margin-bottom: 60px;
`;

export const ButtonGoBack = styled(BorderlessButton)`
  width: 30px;
`;

export const Content = styled.View`
  background: #F2F2F2;
  flex: 1;
  padding: 24px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Download = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 54px;
`;

export const DownloadText = styled.Text`
  font-family: 'Ubuntu_500Medium';
  font-size: 14px;
  margin-left: 12px;
`;



export const Editor = styled.Text`

  font-style: italic;
  font-size: 12px;
  color: #C0C0C0;
`;

export const EditorName = styled.Text`
  color: #FF7800;
`;

export const Title = styled.Text`
  font-family: 'Ubuntu_400Regular';
  font-size: 22px;
  font-weight: bold;
  color: #303B45;
  margin-top: 8px;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  color: #777777;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: #444444;
  margin-top: 16px;
`;

export const ImageLogo = styled.Image`
  position: absolute;
  right: 16px;
  top: 46px;
`;
