class APIRest {
    static baseURL = 'http://localhost:3005';

    static getAllTodos = () => {
        try {
            const options = {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            };
            return APIRest.apiExecute('api/todo/v1', options);
        } catch (e) {
            console.log(e);
        }
    };

    static async apiExecute(path, options = {}) {
        try {
            console.log('apiExecute !')
            const rawRes = await fetch(`${this.baseURL}/${path}`, options);
            const jsonRes = await rawRes.json();
            return jsonRes;
        } catch (e) {
            console.log(e);
        }
    }
}

export { APIRest };
