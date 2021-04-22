import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Image, Text, View, FlatList} from 'react-native';

function Item({title, image, price}) {
  return (
    <View>
      <Image source={{uri: image}} style={{height: 40, width: 40}} />
      <Text>{title}</Text>
      <Text>{price}</Text>
    </View>
  );
}

export class LaLista extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      error: null,
    };
  }
  async componentDidMount() {
    await fetch('https://www.cheapshark.com/api/1.0/deals?metacritic=90')
      .then(res => res.json())
      .then(
        result => {
          // console.warn('result:', result);
          this.setState({
            items: result,
          });
        },
        error => {
          this.setState({
            error: error,
          });
        },
      );
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.state.items.length > 0 ? this.state.items : []}
          renderItem={({item}) => (
            <Item
              title={item.title}
              image={item.thumb}
              price={item.salePrice}
            />
          )}
          keyExtractor={item => item.dealID}
        />
      </View>
    );
  }
}

export default LaLista;
