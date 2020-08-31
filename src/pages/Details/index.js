import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

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

  return (
    <Container>
      <Header>
        <ButtonGoBack onPress={() => goBack()}>
          <Feather name="arrow-left" size={24} color="#ff7800" />
        </ButtonGoBack>
      </Header>
      <Content>
        <Download>
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

