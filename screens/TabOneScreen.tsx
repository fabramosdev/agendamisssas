import * as React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview'


import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <WebView style={styles.container} source={{ uri: 'https://agendaigreja.fbrsolutions.com.br/' }} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

