import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const Exercise = ({ exercise, onDelete }) => {
    const [weight, setWeight] = useState('');
    const [reps, setReps] = useState('');

    return (
        <View style={styles.exerciseContainer}>
            <Text style={styles.exerciseName}>{exercise}</Text>
            <TextInput 
                style={styles.weightInput}
                placeholder="weight"
                onChangeText={(text) => setWeight(text)}
                value={weight}
                keyboardType='numeric'
            />
            <TextInput 
                style={styles.repsInput}
                placeholder="reps"
                onChangeText={(text) => setReps(text)}
                value={reps}
                keyboardType='numeric'
            />
            <TouchableOpacity 
                style={styles.deleteButton} 
                onPress={onDelete}
            >
                <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Exercise;

const styles = {
    exerciseContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
        padding: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 5,
    },
    exerciseName: {
        flex: 1,
        fontSize: 18,
    },
    weightInput: {
        width: 75,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
    },
    repsInput: {
        width: 75,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
    },
    deleteButton: {
        backgroundColor: '#ff0000',
        padding: 5,
        borderRadius: 5,
    },
    deleteButtonText: {
        color: '#fff',
        fontSize: 14,
    },
};
