import 'react-native-gesture-handler';
import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LaLista from './components/LaLista';
import Details from './components/Details';

// function HomeScreen({navigation, route}) {
//   React.useEffect(() => {
//     if (route.params?.post) {
//     }
//   }, [route.params?.post]);
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       {/* <Button
//         title="Go to Details"
//         onPress={() =>
//           navigation.navigate('Details', {itemId: 86, otherParam: 'AYYYYY'})
//         }
//       /> */}
//       <Button
//         title="Create post"
//         onPress={() => navigation.navigate('CreatePost')}
//       />
//       <Text style={{margin: 10}}>Post: {route.params?.post}</Text>
//     </View>
//   );
// }

// function CreatePostScreen({navigation}) {
//   const [postText, setPostText] = React.useState('');

//   return (
//     <>
//       <TextInput
//         multiline
//         placeholder="What's on your mind?"
//         style={{height: 200, padding: 10, backgroundColor: 'white'}}
//         value={postText}
//         onChangeText={setPostText}
//       />
//       <Button
//         title="Done"
//         onPress={() => {
//           navigation.navigate({
//             name: 'Home',
//             params: {post: postText},
//             merge: true,
//           });
//         }}
//       />
//     </>
//   );
// }

// function DetailsScreen({route, navigation}) {
//   const {itemId, otherParam} = route.params;
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Details Screen</Text>
//       <Text>ItemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() =>
//           navigation.push('Details', {itemId: Math.floor(Math.random() * 100)})
//         }
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       <Button
//         title="Go back to the firt screen in stack"
//         onPress={() => navigation.popToTop()}
//       />
//     </View>
//   );
// }

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={LaLista}
          options={{title: 'Ofertas'}}
        />
        <Stack.Screen name="Details" component={Details} />
        {/* <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
