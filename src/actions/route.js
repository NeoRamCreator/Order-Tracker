import { httpQuery } from "./httpQuery";


// const createRoute = async (data) => {
//    await httpQuery('/routes', "POST", data)
// }

const createRoute = async (data) => {
    console.log('createRoute')
    try {
        await httpQuery('/routes', 'POST', data);
        return console.log('Маршрут успешно создан');
    } catch (error) {
        return console.error('Ошибка при создании маршрута:', error);
    }
};


// const getRoutes = () => {
//     return httpQuery('/routes', 'GET')
// }

const getRoutes = async () => {
    try {
        const data = await httpQuery('/routes', 'GET');
        console.log(data);
        return data;
    } catch (error) {
        // Обработка ошибок
    }
};


const deleteRouter = async (id) => {
    try {
        const data = await httpQuery(`/routes/${id}`, 'DELETE');
        console.log(data);
        return data;
    } catch (error) {
        // Обработка ошибок
    }
}



export { createRoute, getRoutes, deleteRouter };