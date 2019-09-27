import React, { Component } from 'react'
// pastry-start Animated
import { Animated } from 'react-native'
// pastry-end Animated

type OwnProps = {}
type Props = OwnProps
class PLACEHOLDER extends Component<Props> {
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

export default PLACEHOLDER
