import React from 'react'
import { CardSection } from './common'
import { Text } from 'react-native'

export default class ListItem extends React.Component {
  render() {
    return (
      <CardSection>
        <Text style={styles.titleStyle}>{this.props.library.title}</Text>
      </CardSection>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}