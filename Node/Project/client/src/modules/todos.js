import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { Todo } from '../resources/data/todo-object';
@inject(Todo)

export class Todos {
    constructor(todo) {
        this.todo = todo;
        this.userObj = JSON.parse(sessionStorage.getItem('userObj'));
        this.statuses = ['Todo', 'In Process', 'Completed'];
        this.isCheckedCompleted = true;
    }

    async attached() {
        await this.getTodos();
    }
    async getTodos() {
        await this.todo.getTodos(this.userObj._id);
        this.showForm = false;
    }

    updateTodo(todo) {
        this.todo.selectedTodo = todo;
        this.saveTodo();
    }

    newTodo() {
        this.todo.newTodo(this.userObj._id);
        this.showForm = true;
    }

    editTodo(todo) {
        this.todo.selectedTodo = todo;
        this.showForm = true;
    }

    async saveTodo() {
        await this.todo.saveTodo()
        this.getTodos();
    }


    async deleteTodo(todo) {
        await this.todo.deleteTodo(todo._id);
        this.getTodos();

    }

    Cancel() {
        this.showForm = false;
    }

}
