import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

const Details = ({route}) => {
  const {link} = route.params;
  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>{title}</Text>
    //   <Image source={{uri: image}} style={styles.image} />
    // </View>
    <WebView
      source={{
        uri: 'https://www.metacritic.com/' + link,
      }}
    />
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 40,
  },
  image: {
    resizeMode: 'contain',
    height: 250,
    width: 150,
  },
});
