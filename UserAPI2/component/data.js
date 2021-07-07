import React, {useState, useEffect} from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';

  import User from './User'
  import {useIsFocused} from '@react-navigation/native'



const data = ({navigation, route}) => {

    const [details, setDetails] = useState(null)
    const isFocused = useIsFocused()
    

    
    const fetchDetails = async () => {
        try {
          const id = route.params
          url = `https://api.github.com/users/${id}`
          const response = await fetch(url);
          const jsonData = await response.json();
          setDetails(jsonData)
        } catch (error) {
          console.log(error)
        }
      }

      useEffect(() => {
        
        fetchDetails()
    }, [isFocused])
    

    if (!details) {
        return(
          <View style={styles.container}>
            <Text>Loading...</Text>
          </View>
        )
      } else {
        return(
          <User details={details}/>
        )
        
      }
}

export default data


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222831"
  },
  button:{
    marginTop: 30,
    paddingHorizontal: 30,
    justifyContent: "center",
    alignSelf: "center"
  }
})