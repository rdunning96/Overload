import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import Exercise from './Exercise';
import { ExerciseAPI } from '../apis/ExerciseAPI';
import ExerciseModal from '../components/ExerciseModal';
import { IExercise } from '../models/Exercise';

const Workout = () => {
    const [exercises, setExercises] = useState<any[]>([]);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [allExercises, setAllExercises] = useState<any[]>([]);


    useEffect(() => {
        getExercises();
    }, []);

    const getExercises = () => {
        // ExerciseAPI.getAll().then((exercises) => {
        //     // response handling
        //     setAllExercises(exercises.data)
        // })
    }


    const openModal = () => {
        setModalVisible(true);
    }

    const closeModal = () => {
        setModalVisible(false);
    }

    const handleExerciseSelection = (exercise: IExercise) => {
        setExercises([...exercises, exercise]);
        setModalVisible(false);
    }

    const handleDelete = (index: number) => {
        setExercises(exercises.filter((_, i) => i !== index));
    }


    return (
        <View>
            <Text style={styles.header}>Workout</Text>
            <TouchableOpacity 
                style={styles.addButton} 
                onPress={openModal}
            >
                <Text style={styles.addButtonText}>Add Exercise</Text>
            </TouchableOpacity>
            <ExerciseModal
                modalVisible={modalVisible}
                allExercises={allExercises}
                closeModal={closeModal}
                handleExerciseSelection={handleExerciseSelection}
            />
            {exercises.map((exercise, index) => (
                <Exercise 
                    key={index} 
                    exercise={exercise} 
                    onDelete={() => handleDelete(index)} 
                />
            ))}
        </View>
    );

}

export default Workout;


const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        alignSelf: 'center'
    },
    addButton: {
        alignSelf: 'center',
        backgroundColor: '#00bfff',
        padding: 10,
        marginTop: 20,
        borderRadius: 5,
    },
    addButtonText: {
        fontSize: 18,
        color: '#fff',
        alignSelf: 'center'
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'scroll',
    },
    exercise: {
        margin: 10,
        padding: 10,
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    doneButton: {
        backgroundColor: '#00bfff',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    doneButtonText: {
        color: '#fff',
        fontSize: 18,
        alignSelf: 'center'
    },
});
