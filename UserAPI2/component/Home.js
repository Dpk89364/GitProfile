import React,{useState} from 'react'
import {
    Text,
    StyleSheet,
    Image
} from 'react-native'
import {
    Form,
    H1,
    Item,
    Button,
    Input
} from 'native-base'
import { ScrollView } from 'react-native-gesture-handler'


const Home = ({navigation, route}) => {

    const [username, setUsername] = useState('')

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={require('../image/logo.png')} style={{height: 170, width: 170, alignSelf: 'center', marginTop: 30}}></Image>
                    <H1 style={styles.heading}> User</H1>
                    <Form>
                        <Item rounded style={styles.formItem}>
                            <Input placeholder="User Name" style={{color: "#000000", marginLeft: 10}} value={username} onChangeText={(text) => setUsername(text)}></Input>
                        </Item>
                        <Button rounded block onPress={() => {navigation.navigate('data', username)}}  style={{backgroundColor: "#C0C0C0", margin: 20, borderColor: "#000000", borderWidth: 2}}>
                            <Text style={{color: "#000000", fontSize: 20}}>Profile</Text>
                        </Button>
                    </Form>
                </ScrollView>
    )

}

export default Home

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
    },
    heading: {
      textAlign: 'center',
      color: '#000000',
      marginHorizontal: 5,
      marginTop: 20,
      marginBottom: 20,
    },
    formItem: {
      marginBottom: 20,
      marginLeft: 20,
      marginRight: 20
    },
    img: {
        flex: 1,
        position: 'relative',
        height: undefined,
        width: undefined,
        
    }
  });