import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, SafeAreaView, Pressable } from 'react-native';
const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headingText}>Internships every months
                Introducing Internee.pk, the ultimate platform designed to turbocharge the
                IT sector in Pakistan! We recognize the immense potential of talented individuals in the country and aim to bridge the gap between them and the thriving IT industry.
            </Text>
            <Text style={{
                fontSize: 24, textAlign: 'center',
                color: "black", backgroundColor: '#3CB371',
                width: '70%', marginLeft: 60, marginTop: 20, marginBottom: 20,
                borderRadius: 20, fontWeight: 'bold'
            }}>Available Openings!</Text>
            <ScrollView style={styles.images}>
                <View >
                    <Image
                        source={require('../Images/backend.jpg')}
                        style={styles.add} />

                    <Text style={styles.Press}>Backend</Text>
                </View>
                <View >

                    <Image
                        source={require('../Images/data.png')}
                        style={styles.add} />

                    <Text style={styles.Press}> Data Analyst</Text>

                </View>
                <View >

                    <Image
                        source={require('../Images/app.jpg')}
                        style={styles.add} />

                    <Text style={styles.Press}> App Development</Text>

                </View>



            </ScrollView>
        </SafeAreaView>
    )
};
export default HomeScreen;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0eee4', flex: 1
    },


    headingText: {
        fontSize: 19, textAlign: 'center', color: 'black',
        alignSelf: 'center', fontWeight: 'bold', backgroundColor: '#FFE4B5',
        fontStyle: 'italic', borderRadius: 10, elevation: 5,
        shadowColor: '#000',
        marginLeft: 5,
        padding: 10,
        marginTop:20
    },
    images: {
        width: '90%',
        padding: 10,
        height: '100%',
        backgroundColor: 'grey',
        borderRadius: 20,
        elevation: 200,
        shadowColor: 'red',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginLeft: 20,
    },
    add: {
        resizeMode: 'contain', height: 270, width: 330
    },

    Press: {
        fontSize: 19, textAlign: 'center',
        alignSelf: "center", color: 'black', fontWeight: "bold", marginBottom: 20,
        backgroundColor: 'tomato', marginTop: 10, padding: 5, borderRadius: 10
    }


})