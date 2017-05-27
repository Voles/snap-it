import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Camera from 'react-native-snap-camera';
import SnapEmoji from 'react-native-snap-emoji';
import SnapText from 'react-native-snap-text';

import Header from './components/Header';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.toggleEmoji = this.toggleEmoji.bind(this)
    this.toggleText = this.toggleText.bind(this)
  }

  state = {
    isEmojiVisible: false
  }

  toggleEmoji() {
    this.setState({
      isEmojiVisible: !this.state.isEmojiVisible
    })
  }

  toggleText() {
    this.setState({
      isTextVisible: !this.state.isTextVisible
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Header title="SnapShot"
                onToggleEmoji={this.toggleEmoji}
                onToggleText={this.toggleText}
        />

        <SnapEmoji isVisible={this.state.isEmojiVisible}>
          <SnapText isVisible={this.state.isTextVisible}>
            <Camera type="simulate" />
          </SnapText>
        </SnapEmoji>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
