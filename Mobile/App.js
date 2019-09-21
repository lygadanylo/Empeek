import React, {Fragment, Component} from 'react';
import {View, Text, Button} from 'react-native';

class App extends Component {
  render() {
    return (
      <Fragment>
        <View>
          <Text>Hello World!</Text>
          <Button>Click me!</Button>
        </View>
      </Fragment>
    );
  }
}
export default App;
