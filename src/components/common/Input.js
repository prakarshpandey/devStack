import React from 'react'
import { TextInput, View, Text, Platform } from 'react-native'

export class Input extends React.Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.labelStyle}>{this.props.label}</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={this.props.onChangeText}
          value={this.props.value}
          autoCorrect={false}
          placeholder={this.props.placeHolder}
          secureTextEntry={this.props.secureTextEntry}
        />
      </View>
    )
  }
}
const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },

  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
}