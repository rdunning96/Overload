//auth service using axios
import axios from 'axios';
import { Alert } from 'react-native';
import { User } from '../models/User';

const API_URL = 'http://localhost:3000/v1/auth/';

async function authenticate(mode, user) {
    const response = await axios.post(API_URL + mode, user);
    const token = response.data.tokens.access.token;
    console.log(token);
    return token;
}

export async function login(user: User) {
    return authenticate('login', user);
}

export async function register(user: User) {
    return authenticate('register', user);
}

// const AuthService = {
//     createUser: async (user: User) => {
//         try {
//             const response = await axios.post(API_URL + 'register', user);
//             return response.data;
//         } catch (error) {
//             console.log(error);
//         }
//     },
//     login: async ({ email, password }) => {
//         try {
//             const response = await axios.post(API_URL + 'login', { email, password });
//             // if (response.data.accessToken) {
//             //     localStorage.setItem('user', JSON.stringify(response.data));
//             // }
//             console.log(response.data);
//             return response.data;
//         } catch (error) {
//             Alert.alert('Authentication Failed', 'Could not log you in. Please check your credentials and try again.');

//         }
//         // const response = await axios.post(API_URL + 'login', {email, password});
//         // // const response = await axios.post(API_URL + 'login', user);
//         // // if (response.data.accessToken) {
//         // //     localStorage.setItem('user', JSON.stringify(response.data));
//         // // }
//         // console.log(response.data);
//     }
// }

// export default AuthService;