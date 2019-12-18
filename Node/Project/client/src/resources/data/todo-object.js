import { inject } from 'aurelia-framework';
import { DataServices } from './data-services';
@inject(DataServices)
export class Todo {
    constructor(data) {
        this.data = data;
        this.TODO_SERVICE = 'todos';
    }

    newTodo(id) {
        this.selectedTodo = {};
        this.selectedTodo.todo = "";
        this.selectedTodo.detail = "";
        this.selectedTodo.dateDue = new Date();
        this.selectedTodo.status = "Todo";
        this.selectedTodo.userid = id;
    }

    async saveTodo() {
        let serverResponse;
        if (this.selectedTodo) {
            if (this.selectedTodo._id) {
                let url = this.TODO_SERVICE + "/" + this.selectedTodo._id;
                serverResponse = await this.data.put(this.selectedTodo, url);
            } else {
                serverResponse = await this.data.post(this.selectedTodo, this.TODO_SERVICE);
            }
            return serverResponse;
        }
    }

    async getTodos(userid) {
        this.todosArray = [];
        let url = this.TODO_SERVICE + '/user/' + userid;
        let response = await this.data.get(url);
        if (!response.error) {
            this.todosArray = response;
        } else {
            this.todosArray = [];
        }
    }

    async deleteTodo(id) {
        let url = this.TODO_SERVICE + '/' + id;
        await this.data.delete(url);
    }
}
