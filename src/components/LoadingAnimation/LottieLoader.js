import React from 'react';
import {Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';

const {width} = Dimensions.get('window');

export default class LottieLoader extends React.Component {
  constructor() {
    super();
    this.state = {
      source: require('../../assets/animations/buffer.json'),
    };
  }

  UNSAFE_componentWillMount() {
    if (width >= 600) {
      this.setState({
        source: require('../../assets/animations/error.json'),
      });
    }
  }
  // npx react-codemod rename-unsafe-lifecycles
  componentDidMount() {
    this.animation.play();
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  render() {
    return (
      <LottieView
        ref={animation => {
          this.animation = animation;
        }}
        style={{
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        source={this.state.source}
      />
    );
  }
}
