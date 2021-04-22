import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

function Item({item, image}) {
  return (
    <View>
      <Image source={{uri: image}} style={{height: 40, width: 40}} />
      <Text>{title}</Text>
    </View>
  );
}

export class FlatList extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default FlatList;
