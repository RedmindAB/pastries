import React, { Component } from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { MainState } from '../../redux/reducers'
// pastry-start Animated
import { Animated } from 'react-native'
// pastry-end Animated

type OwnProps = {}
type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>
type Props = OwnProps & StateProps & DispatchProps

class PASCAL_PLACEHOLDER extends Component<Props> {
  // pastry-start Animated

  animatedValue = new Animated.Value(0)

  componentDidMount() {
    this.animate()
  }

  animate = (toValue = 1) =>
    Animated.timing(this.animatedValue, {
      toValue,
      duration: 200
    }).start()
  // pastry-end Animated

  render() {
    // pastry-start Animated

    const translateY = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 100]
    })

    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    })

    const scale = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1.2]
    })
    // pastry-end Animated

    return null
  }
}

const mapStateToProps = ({  }: MainState) => ({})

const mapDispatchToProps = (dispatch: Dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PASCAL_PLACEHOLDER)
