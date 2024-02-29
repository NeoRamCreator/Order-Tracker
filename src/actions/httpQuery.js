


export const httpQuery = async (url, method, data) => {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
    };

    if (method === 'POST' || method === 'DELETE' || method === 'PUT') {
        options.body = JSON.stringify(data)
    }

    try {
        const res = await fetch(url, options);

        if (!res.ok) {
            throw new Error(res.status);
        }

        if (method === 'GET') {
            return await res.json();
        } else {
            return await res.text();
        }
    } catch (error) {
        console.error('Error during fetch:', error);
        console.error('Error details:', error.message || error);
        throw error; // Прокидываем ошибку дальше
    }
};











// export const httpQuery = (url, method, data) => {


//     const options = {
//         method: method,
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     };
//     if (method === 'POST' || method === 'DELETE' || method === 'PUT') {
//         options.body = JSON.stringify(data)
//     }


//     fetch(url, options)
//         .then(res => {
//             if (!res.ok) {
//                 throw new Error(res.status)
//             }
//             if (method === 'GET') {
//                 return res.json()
//             }
//             console.log('1', res)
//             return res.text(); 
//         })
//         .then(responseText => {
//             if (method === 'GET') {
//                 const json = JSON.stringify(responseText);
//                 console.log(json);
//                 return json;
//             } else {
//                 console.log(responseText);
//             }
//         })
//         .catch(error => {
//             console.error('Error during fetch:', error);
//             console.error('Error details:', error.message || error);
//         });
        
// }