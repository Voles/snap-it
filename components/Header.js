import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

const HEADER_HEIGHT = Platform.select({
  ios: 0,
  android: 24
})

const Header = ({ title, onToggleEmoji, onToggleText }) =>
  <View style={styles.container}>
    <Text style={styles.title}>{ title }</Text>
    <View style={styles.actions}>
      <Text style={styles.icon} onPress={onToggleText}>✍🏻</Text>
      <Text style={styles.icon} onPress={onToggleEmoji}>🤣</Text>
    </View>
  </View>

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2ECC40',
    height: 80,
    flexDirection: 'row',
    alignItems: 'baseline',
    padding: 24,
    justifyContent: 'space-between',
    marginTop: HEADER_HEIGHT
  },
  title: {
    color: 'white',
    fontSize: 25,
  },
  icon: {
    fontSize: 25,
    paddingLeft: 10
  },
  actions: {
    flexDirection: 'row'
  }
});


export default Header;
