import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';

function Item({title, image, sale, price}) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.containerText}>
          <Text style={styles.titulo}>{title}</Text>
          <View style={styles.containerPrecios}>
            <Text style={styles.precios}>
              Precio normal:{' '}
              <Text style={{textDecorationLine: 'line-through'}}>{price}</Text>
            </Text>
            <Text style={styles.precios}>Precio de oferta: {sale} $</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const renderItem = ({item}) => {
  return (
    <Item
      title={item.title}
      image={item.thumb}
      sale={item.salePrice}
      price={item.normalPrice}
    />
  );
};

export class LaLista extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      error: null,
    };
  }
  async componentDidMount() {
    await fetch(
      'https://www.cheapshark.com/api/1.0/deals?storeID=3&metacritic=85&lowersPrice=1&AAA=1',
    )
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
      <>
        <FlatList
          data={this.state.items.length > 0 ? this.state.items : []}
          renderItem={renderItem}
          keyExtractor={item => item.dealID}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 1,
    marginBottom: 5,
  },
  containerText: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    height: 50,
    width: 150,
  },
  titulo: {
    fontSize: 20,
  },
  containerPrecios: {
    flexDirection: 'row',
  },
  precios: {
    paddingEnd: 10,
    fontSize: 15,
  },
});

export default LaLista;
