/* eslint-disable no-console */
/* global fetch */
export class APIRest {
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

    static getSingleTodo = (id:string) => {
        console.log(id);
        try {
            const options = {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            };
            return APIRest.apiExecute(`api/todo/v1/${id}`, options);
        } catch (e) {
            console.log(e);
        }
    };

    static addTodo = async (values: { title: string; description: string; category: string; }) => {
        try {
            const options = {
                method: 'POST',
                body:JSON.stringify(values),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            };
            return APIRest.apiExecute('api/todo/v1/create', options);
        } catch (e) {
            console.log(e);
        }
    }

    static deleteTodo = (id:string) => {

        try {
            const options = {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            };
            return APIRest.apiExecute(`api/todo/v1/${id}`, options);
        } catch (e) {
            console.log(e);
        }
    };
    

    static async apiExecute(path:string, options = {}) {
        try {
            console.log(path);
            const rawRes = await fetch(`${this.baseURL}/${path}`, options);
            const jsonRes = await rawRes.json();
            return jsonRes;
        } catch (e) {
            console.log(e);
            return e;
        }
    }
}

