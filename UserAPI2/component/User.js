import React from 'react'
import {Text, View, StyleSheet, Image, Linking, TouchableOpacity} from 'react-native'
import {
    Form,
    Button,
} from 'native-base'
import moment from 'moment'
import { ScrollView } from 'react-native-gesture-handler'


const User = ({details}) => {

    if(details.message){
        return(
            <View style={{flex: 1, justifyContent: "center"}}>
                <Text style={{alignSelf: "center", fontSize: 35}}>No User Found</Text>
            </View>
        )
    }
        
        return(
            <ScrollView style={{backgroundColor: '#ffffff'}}>
            <View style={styles.container}>
                <View style={{alignContent: "center"}}>
                    <View>
                        <Image source={{uri: details.avatar_url}} style={styles.image}></Image>
                        <Text style={styles.name}>{details.name}</Text>
                        <Text style={{color: "#808080", fontSize: 20, alignSelf: "center"}}>{details.login}</Text>
                    </View>
                </View>
                <View>
                    <View style={{flex: 1, flexDirection: "row"}}>
                        <View style={{width: "50%", marginTop: 20,}}>
                            <Text style={{ paddingLeft: 35, width: "80%", color: "#000000", alignSelf: "center", fontSize: 15, padding: 8, borderColor: "#808080", borderWidth: 1, borderRadius: 10, backgroundColor: "#E5E4E2"}}>Followers: {details.followers}</Text>
                        </View>
                        <View style={{width: "50%", marginTop: 20}}>
                            <Text style={{ paddingLeft: 40, width: "80%", color: "#000000", alignSelf: "center", fontSize: 15, padding: 8, borderColor: "#808080", borderWidth: 1, borderRadius: 10, backgroundColor: "#E5E4E2"}}>Following: {details.following}</Text>
                        </View> 
                    </View> 

                    <Text style={{color: "#000000", marginTop: 20, marginLeft: 20, marginRight: 20, fontSize: 20, paddingBottom: 10, borderBottomColor: "#000000", borderBottomWidth: 1}}>Type : {details.type == null ? (" No data available") : (details.type) }</Text>
                    <Text style={{color: "#000000", marginTop: 20, marginLeft: 20, marginRight: 20, fontSize: 20, paddingBottom: 10, borderBottomColor: "#000000", borderBottomWidth: 1}}>Bio : {details.bio == null ? (" No data available") : (details.bio) }</Text>
                    <Text style={{color: "#000000", marginTop: 20, marginLeft: 20, marginRight: 20, fontSize: 20, paddingBottom: 10, borderBottomColor: "#000000", borderBottomWidth: 1}}>E-mail Id : {details.email == null ? (" No data available") : (details.email) }</Text>
                    <Text style={{color: "#000000", marginTop: 20, marginLeft: 20, marginRight: 20, fontSize: 20, paddingBottom: 10, borderBottomColor: "#000000", borderBottomWidth: 1}}>Twitter_username : {details.twitter_username == null ? (" No data available") : (details.twitter_username) }</Text>
                    <Text style={{color: "#000000", marginTop: 20, marginLeft: 20, marginRight: 20, fontSize: 20, paddingBottom: 10, borderBottomColor: "#000000", borderBottomWidth: 1}}>Blog : {details.blog == null ? (" No data available") : (details.blog) }</Text>
                    <Text style={{color: "#000000", marginTop: 20, marginLeft: 20, marginRight: 20, fontSize: 20, paddingBottom: 10, borderBottomColor: "#000000", borderBottomWidth: 1}}>Location : {details.location == null ? (" No data available") : (details.location) }</Text> 
                    <Form>
                        <Button rounded block onPress={() => {Linking.openURL(details.html_url)}} style={{backgroundColor: "#7B241C", margin: 20, borderColor: "#000000", borderWidth: 2}}>
                            <Text style={{color: "#ffffff", fontSize: 20}}>FULL PROFILE</Text>
                        </Button>
                    </Form>
                </View> 
            </View>
            </ScrollView>
            
        )
    
    

}

export default User;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#ffffff',
    },
    image: {
      width: 175,
      height: 175,
      borderRadius: 175 / 2,
      alignSelf: "center",
      marginTop: 10
    },
    name: {
        color: "#000000",
        marginLeft: 10,
        marginTop: 5,
        fontSize: 25,
        alignSelf: "center"
    }
  });