const URL_API = 'https://rickandmortyapi.com/api/';// DESARROLLO 

const Fetch = {
    // PETICIÓN GET
    async GET_URL(obj) {
        return await _Fetch(obj.url, 'GET');
    },

    async GET(obj) {
        return await _Fetch(URL_API+obj.url, 'GET');
    },

    // PETICIÓN POST
    async POST(obj) {
        return await _Fetch(URL_API+obj.url, 'POST', obj.obj, obj.login);
    },

    // PETICIÓN PUT
    async PUT(obj) {
        return await _Fetch(URL_API+obj.url, 'PUT', obj.obj, obj.login);
    },

    // PETICIÓN DELETE
    async DELETE(obj) {
        return await _Fetch(URL_API+obj.url, 'DELETE', obj.obj);
    }
}
export default Fetch;


/**
 * @param path complemento del dominio para llamar una metodo
 * @param method tipo de metodo a utilizar
 * @param parameters parametros que tendrá la petición
 * @param async determinar si será asyn o no
 */
async function _Fetch(path, method, parameters = null, async = true) {

    let opcions = {
        async: async,
        crossDomain: true,
        method: method,
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    };

    if (method !== 'GET' && parameters) {
        opcions.body = JSON.stringify(parameters)
    }

    let result = null;
    await fetch(path, opcions)
    .then(response => 
        response.json()
    ) 
    .then(data => {
        result = data;
    })
    .catch(e =>{
        console.error(e);
    });
    return result;

}
