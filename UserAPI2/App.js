import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground
} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from'./component/Home'
import data from'./component/data'


const Stack = createStackNavigator();


const App = () =>{
 return(
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Home">
       
          <Stack.Screen name="Home" component={Home} options={{headerStyle:{backgroundColor: "#C0C0C0"},title: 'GitHub User', headerTitleStyle: {textAlign: "center", color: "#000000", fontSize: 30,}}}>

          </Stack.Screen>
          <Stack.Screen name="data" component={data}  options={{headerStyle:{backgroundColor: "#C0C0C0"},title: 'Details', headerTitleStyle: {textAlign: "center", color: "#000000", fontSize: 30, marginRight: 55}}}>
            </Stack.Screen>
       
     </Stack.Navigator>
   </NavigationContainer>
 )
}

export default App;
