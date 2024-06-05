import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, SafeAreaView, Pressable,TouchableOpacity, Linking  } from 'react-native';
import Icons from 'react-native-vector-icons/Entypo'
const openURL = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };
const Contact = () => {
    return (
        <View style={styles.container}>
            <Image 
            source={require('../Images/VI_logo.png')}
            style={styles.LOGO}/>
            <Text style={styles.headingText}>Socialize with us:</Text>
            <View style={styles.iconRow}>
            <TouchableOpacity onPress={() => openURL('https://www.facebook.com/p/Interneepk-100093222249320/')}>
            <Icons name="facebook" size={50} color="blue" 
            alignSelf='center' style={styles.icon}
             />
             </TouchableOpacity>
             <TouchableOpacity onPress={() => openURL('https://www.youtube.com/@InterneePk')}>
             <Icons name="youtube" size={50} color="red" 
            alignSelf='center'  style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openURL('https://www.instagram.com/internee.pk/')}>
            <Icons name="instagram" size={50} color="red" 
            alignSelf='center'  style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openURL('https://www.facebook.com/p/Interneepk-100093222249320/')}>
            <Icons name="twitter" size={50} color="black" 
            alignSelf='center'  style={styles.icon} />
              </TouchableOpacity>
            
             </View>
             
            <Text style={styles.headingText}>Phone no: +923453191638 </Text>
            <Text style={styles.headingText}>Email: info@internee.pk.</Text>
            <Text style={styles.rights}>Copyright ©2024 internee.pk Pvt Ltd.
All rights reserved.</Text>

        </View>
    )
}
export default Contact;
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#e1e9b7'
    }, LOGO:{
        resizeMode:'contain',height:200,width:360,alignSelf:'center'
    },
    headingText:{
        fontSize:25,color:'black',alignSelf:'center',fontWeight:'bold',marginBottom:20

    },
    iconRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,marginBottom:20
      },
      icon:{
        marginHorizontal:10
      },
      rights:{
        fontSize:20, textAlign:'center', alignSelf:'center',color:'black',marginTop:20
      }
})
