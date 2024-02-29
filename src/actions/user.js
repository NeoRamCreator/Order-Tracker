import { httpQuery } from "./httpQuery";


const createUser = async (data) => {
    try {
        await httpQuery('/users', "POST", data);
        return console.log('Перевозчик успешно добавлен');
    } catch (error) {
        return console.error('Ошибка при добавлении перевозчика:', error);
    }
};


const getUsers = async () => {
    try {
        const data = await httpQuery('/users', 'GET');
        console.log(data);
        return data;
    } catch (error) {
        // Обработка ошибок
    }
};

const deleteUser = async (id) => {
    try {
        const data = await httpQuery(`/users/${id}`, 'DELETE');
        console.log(data);
        return data;
    } catch (error) {
        // Обработка ошибок
    }
}





export {
    createUser,
    getUsers,
    deleteUser,

};