import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, Text, TouchableOpacity, Modal, TextInput, StyleSheet } from 'react-native';
import { IExercise } from '../models/Exercise';

interface Props {
    modalVisible: boolean;
    allExercises: Exercise[];
    closeModal: () => void;
    handleExerciseSelection: (exercise: Exercise) => void;
}

const ExerciseModal = ({ modalVisible, allExercises, closeModal, handleExerciseSelection }: Props) => {
    const [searchText, setSearchText] = useState('');
    const [selectedBodyPart, setSelectedBodyPart] = useState('');
    const [selectedExercises, setSelectedExercises] = useState<IExercise[]>([]);

    const filteredExercises = allExercises
        // .filter(exercise => exercise.name.toLowerCase().includes(searchText.toLowerCase()))
        // .filter(exercise => !selectedBodyPart || exercise.bodyPart === selectedBodyPart)
        .sort((a, b) => a.name.localeCompare(b.name));

    console.log(allExercises);
    console.log(filteredExercises);

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={closeModal}
        >
            <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                    <Text style={styles.closeButtonText}>X</Text>
                </TouchableOpacity>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchBar}
                        placeholder="Search"
                        onChangeText={text => setSearchText(text)}
                        value={searchText}
                    />
                    <Text style={styles.filterLabel}>Filter by Body Part:</Text>
                    <Picker
                        selectedValue={selectedBodyPart}
                        style={styles.filterPicker}
                        onValueChange={(itemValue) => setSelectedBodyPart(itemValue)}
                    >
                        <Picker.Item label="All" value="" />
                        <Picker.Item label="Chest" value="Chest" />
                        <Picker.Item label="Back" value="Back" />
                        <Picker.Item label="Shoulders" value="Shoulders" />
                        <Picker.Item label="Arms" value="Arms" />
                        <Picker.Item label="Legs" value="Legs" />
                        <Picker.Item label="Abs" value="Abs" />
                    </Picker>
                </View>
                {filteredExercises.map((exercise, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => {
                            handleExerciseSelection(exercise);
                            setSelectedExercises([...selectedExercises, exercise]);
                        }}
                    >
                        <Text style={styles.exercise}>{exercise.name}</Text>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => {
                        closeModal();
                        handleExerciseSelection(selectedExercises);
                    }}
                >
                    <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}



// const ExerciseModal = ({ modalVisible, allExercises, closeModal, handleExerciseSelection }) => {
//     return (
//         <Modal 
//             animationType="slide"
//             transparent={false}
//             visible={modalVisible}
//             onRequestClose={closeModal}
//         >
//             <View style={styles.modalContainer}>
//                 {allExercises.map((exercise, index) => (
//                     <TouchableOpacity 
//                         key={index} 
//                         onPress={() => handleExerciseSelection(exercise)}
//                     >
//                         <Text style={styles.exercise}>{exercise}</Text>
//                     </TouchableOpacity>
//                 ))}
//                 <TouchableOpacity 
//                     style={styles.doneButton} 
//                     onPress={closeModal}
//                 >
//                     <Text style={styles.doneButtonText}>Done</Text>
//                 </TouchableOpacity>
//             </View>
//         </Modal>
//     );
// }

export default ExerciseModal;


const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
    closeButton: {
        alignSelf: 'flex-end',
    },
    closeButtonText: {
        fontSize: 20,
        color: 'gray',
    },
    searchContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchBar: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
    },
    filterLabel: {
        marginRight: 10,
    },
    filterPicker: {
        width: 100,
    },
    exercise: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    addButton: {
        alignSelf: 'center',
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    addButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
