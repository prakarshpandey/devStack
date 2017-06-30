import React from 'react'
import { CardSection } from './common'
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native'
import * as actions from '../actions'
import { connect } from 'react-redux'

class ListItem extends React.Component {
  componentWillUpdate () {
    LayoutAnimation.spring()
  }

  renderDescription () {
    if (this.props.expanded) {
      return (
        <CardSection>
          <Text style={{flex: 1, padding: 15}}>
            {this.props.library.description}
          </Text>
        </CardSection>
      )
    }
    return null
  }

  render () {
    console.log(this.props)
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(this.props.library.id)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {this.props.library.title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id
  return {
    expanded: expanded
  }
}

export default connect(mapStateToProps, actions)(ListItem)
