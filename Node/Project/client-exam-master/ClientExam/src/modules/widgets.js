import { inject } from 'aurelia-framework';
import { Widget } from "../resources/data/widget-object";

@inject(Widget)
export class Widgets {
    constructor(widget) {
        this.widget = widget;
        //this.userObj = JSON.parse(sessionStorage.getItem('userObj'));
        this.statuses = ['Widget', 'In Process', 'Completed'];
        this.isCheckedCompleted = true;
        this.showForm = false;
    }
    async attached() {
        await this.getWidgets();
    }

    async getWidgets() {
        await this.widget.getWidgets();
        this.showForm = false;
    }

    updateWidget(widget) {
        this.widget.selectedWidget = widget;
        this.saveWidget();
    }
    newWidget() {
        this.widget.newWidget();
        this.showForm = true;
    }
    editWidget(widget) {
        this.widget.selectedWidget = widget;
        this.showForm = true;
    }
    async saveWidget() {
        await this.widget.saveWidget()
        this.getWidgets();
    }
    async deleteWidget(widget) {
        await this.widget.deleteWidget(widget._id);
        this.getWidgets();
    }

    Cancel() {
        this.showForm = false;
    }

}