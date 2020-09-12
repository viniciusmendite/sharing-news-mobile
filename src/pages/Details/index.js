import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';

import imageLogo from '../../assets/imagelogo/imagelogo.png';

import { 
  Container, 
  ImageLogo,
  Header,
  ButtonGoBack,
  Content,
  Download,
  DownloadText,
  Editor,
  EditorName,
  Title,
  Subtitle,
  Description,
} from './styles';

export default function Details() {
  const { goBack } = useNavigation();

  const route = useRoute();
  const newPublish = route.params.item;

  // Create a PDF page with text and rectangles
  async function handlePdf() {
    const html = `
      <p style="font-style: italic; font-size: 12px; color: #C0C0C0">
        escrito por 
        <span style="color: #FF7800">${newPublish.editor}</span>
      </p>

      <h1 style="font-size: 22px; font-weight: bold; color: #303B45; margin-top: 8px">
        ${newPublish.title}
      </h1>

      <h3 style="font-size: 18px; color: #777777">
        ${newPublish.subtitle}
      </h3>
      
      <p style="font-size: 14px; color: #444444; margin-top: 16px;">
        ${newPublish.description}
      </p>
    `;
    const { uri } = await Print.printToFileAsync({ html });
    Sharing.shareAsync(uri);
  }

  return (
    <Container>
      <Header>
        <ButtonGoBack onPress={() => goBack()}>
          <Feather name="arrow-left" size={24} color="#ff7800" />
        </ButtonGoBack>
      </Header>
      <Content>
        <Download onPress={handlePdf}>
          <Feather name="download" size={24} color="#ff7800" />
          <DownloadText>PDF</DownloadText>
        </Download>

        <Editor>escrito por <EditorName>{newPublish.editor}</EditorName></Editor>

        <Title style={{ fontFamily: 'Ubuntu_700Bold' }}>{newPublish.title}</Title>

        <Subtitle>{newPublish.subtitle}</Subtitle>

        <Description>{newPublish.description}</Description>
      </Content>
      <ImageLogo source={imageLogo} />
    </Container>
  )
}
