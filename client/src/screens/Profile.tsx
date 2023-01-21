import React from "react";
import { Text } from "react-native";
//test user data
const user = {
    name: "John Doe",
    email: "test",
    height: "5'10",
    weight: "150",
    age: "25",
};


const Profile = () => {
    //display user info
    return (
        <>
            <Text>Name: {user.name}</Text>
            <Text>Email: {user.email}</Text>
            <Text>Height: {user.height}</Text>
            <Text>Weight: {user.weight}</Text>
            <Text>Age: {user.age}</Text>
            
        </>


    );
};

export default Profile;