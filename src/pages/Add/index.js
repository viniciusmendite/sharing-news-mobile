import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native'

import api from '../../services/api'

import { Container, PageScroll, HeaderText, Label, Input, PublishButton, PublishButtonText } from './styles';

export default function Add() {
  const [editor, setEditor] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');

  const { navigate } = useNavigation();
  
  async function handleNewNew() {
    const data = {
      editor,
      title,
      subtitle,
      description
    }
    
    try {
      await api.post('news', data);

      navigate('News')
      
    } catch (error) {
      alert(error)
    }
  }
  
  return (
    <Container>
      <HeaderText>New new</HeaderText>
        <PageScroll>

          <Label>Editor</Label>
          <Input value={editor} onChangeText={text => setEditor(text)}/>
          <Label>Title</Label>
          <Input value={title} onChangeText={text => setTitle(text)}/>
          <Label>Subtitle</Label>
          <Input value={subtitle} onChangeText={text => setSubtitle(text)}/>
          <Label>Description</Label>
          <Input multiline value={description} onChangeText={text => setDescription(text)}/>

          <PublishButton onPress={handleNewNew}>
            <PublishButtonText>Publish</PublishButtonText>
          </PublishButton>
        </PageScroll>
    </Container>
  );
}