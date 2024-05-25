import React from 'react';
import { StyleSheet, Text, View, Image,Pressable } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerWrapper}>
        <Svg height="100%" width="100%" style={styles.svg}>
          <Path
            d="M0 0 L1000 0 L1000 500 Q500 600 0 200 Z"
            fill="#101820FF"
          />
        </Svg>
        <View style={styles.containerContent}>
          <Image
            source={ require('../Images/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.welcomeText}>Looking for dream internship?</Text>
        </View>
      </View>
      <View style={styles.container3}>
      <Pressable
          onPress={() => {
          
          }}
        >
          <Text style={styles.buttonText}>Let's Continue</Text>
        </Pressable>
        
        <Text style={styles.description}>Internee.pk kickstart student's tech careers with first internships, providing industry exposure, practical skills, and networking opportunities,
         paving the way for their success in the tech industry.</Text>
         
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006B38FF',
  },
  containerWrapper: {
    flex: 0.5,
    overflow: 'hidden',
    position: 'relative',
  },
  svg: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
  },
  containerContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 260,
    height: 260,
    borderRadius: 200,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'white',
  },
  welcomeText: {
    fontSize: 24,
    color: '#f3ca20',
    fontWeight: 'bold',padding:10,marginHorizontal:15,fontStyle:'italic'
  },
  container3: {
    flex: 0.5,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#006B38FF',
    marginTop: -30, 
  },
  description: {
    fontSize: 25,
    color: 'white',
    textAlign:'center',fontWeight:'bold',alignSelf:'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor:'#FFE77AFF',marginVertical:30
  },
});
