import React, { useState } from 'react';
import { Button, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

function Counter(): React.JSX.Element {
  const [count, setCount] = useState(0);

  return (
    // <View style={{  }}>
    <View style={styles.container}>
      <Text>Counter: </Text>
      {/* <Button style={styles.button} title="-" onPress={ () => setCount(count - 1)} /> */}

        <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
          <Text>-</Text>
        </TouchableOpacity>

        <Text>{count}</Text>
        
        <Button title="+" onPress={ () => setCount(count + 1) } />
    </View>
  )
}

// React Native Styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 10,
    display: 'flex',
    marginBottom: 10,
    marginTop: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 10,
    borderRadius: 100,
  }
});

export default Counter;