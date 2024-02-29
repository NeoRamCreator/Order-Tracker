import { httpQuery } from "./httpQuery";


const createOrder = async (data) => {
    console.log('createOrder')
    try {
        await httpQuery('/orders', "POST", data);
        return console.log('Закакз успешно создан');
    } catch (error) {
        return console.error('Ошибка при создании заказа:', error);
    }
}

const getOrderData = async (data) => {
    try {
        const dataSet = await httpQuery(`/orders/${data}`, "GET");
        console.log('Закакз определен');
        console.log(dataSet);
        return dataSet
    } catch (error) {
        return console.error('Ошибка при определении заказа:', error);
    }
}

const getOrders = async () => {
    try {
        const data = await httpQuery('/orders', 'GET');
        console.log(data);
        return data;
    } catch (error) {
        // Обработка ошибок
    }
};

const deleteOrder = async (id) => {
    try {
        const data = await httpQuery(`/orders/${id}`, 'DELETE');
        console.log(data);
        return data;
    } catch (error) {
        // Обработка ошибок
    }
}




export { 
    createOrder, 
    getOrderData,
    getOrders,
    deleteOrder,

};