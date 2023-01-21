import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

    const navigateToWorkout = () => {
        navigation.navigate('Workout');
    }

    return (
        <View>
            <Text style={styles.header}>Start Workout</Text>
            <TouchableOpacity 
                style={styles.button} 
                onPress={navigateToWorkout}
            >
                <Text style={styles.buttonText}>Quick Start</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        alignSelf: 'center'
    },
    button: {
        alignSelf: 'center',
        backgroundColor: '#00bfff',
        padding: 10,
        marginTop: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        alignSelf: 'center'
    },
});

export default Home;
