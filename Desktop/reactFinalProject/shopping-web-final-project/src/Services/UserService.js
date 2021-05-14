import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/v1/users"

class UserService{
    getUserInfo(){
        return axios.get(USER_API_BASE_URL);
    }
    registerUser(user){
        return axios.post(USER_API_BASE_URL, user);
    }
    editUser(user){
        return axios.put(USER_API_BASE_URL+'/2', user);
    }
    getUserById(userId){
        return axios.get(USER_API_BASE_URL+'/'+userId);
    }
    getUserByEmailAndPassword(userEmail, userPassword){
        return axios.get(USER_API_BASE_URL+'/emailandpassword/?email='+userEmail+'&password='+userPassword);
    }
    editUserById(user, userId){
        return axios.put(USER_API_BASE_URL+'/'+userId, user);
    }
}

export default new UserService()