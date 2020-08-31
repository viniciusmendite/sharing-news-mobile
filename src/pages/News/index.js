import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api'

import { Container, HeaderText, FlatList, Card, Editor, EditorName, Title, Subtitle, Description } from './styles';

export default function News() {
  const { navigate } = useNavigation();
  
  const [news, setNews] = useState([]);

  useEffect(()=>{
    async function loadingNews() {
      const response = await api.get('news');
      setNews(response.data.docs)
    }

    loadingNews();
  },[])

  function navigateToDetail(item) {
    navigate('Details', { item })
  }

  return (
    <Container>
      <HeaderText>sharing news</HeaderText>
      <FlatList
        data={news}
        keyExtractor={item => String(item._id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item })=>(
          <Card 
          activeOpacity={0.6} 
          onPress={() => navigateToDetail(item)}
        >
          <Editor>escrito por <EditorName>{item.editor}</EditorName></Editor>
          <Title>{item.title}</Title>
          <Subtitle>{item.subtitle}</Subtitle>
          <Description numberOfLines={2}>{item.description}</Description>
        </Card>
        )}
      />
    </Container>
  );
}
          