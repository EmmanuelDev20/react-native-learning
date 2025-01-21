import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';

const TextInANest = () => {
  // const [titleText, setTitleText] = useState("Bird's Nest");
  // const bodyText = 'This is not really a bird nest.';

  // const onPressTitle = () => {
  //   setTitleText("Bird's Nest [pressed]");
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
        I am bold
        <Text style={styles.innerText}> and red</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontWeight: 'bold',
  },
  innerText: {
    color: 'red',
  },
});

export default TextInANest;