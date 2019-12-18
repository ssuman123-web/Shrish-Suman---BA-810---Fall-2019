import {AuthorizeStep} from 'aurelia-auth';

export class App {
  configureRouter(config, router) {
    this.router = router;
     config.addPipelineStep('authorize', AuthorizeStep); 
    config.title = 'Things ToDo';
    config.map([
      {
        route: ['', 'home'],
        name: 'home',
        moduleId: 'modules/home',
        title: 'Home',
        auth: false
      },
      {
        route: 'users',
        name: 'users',
        moduleId: 'modules/users',
        title: 'Users',
        //auth: true

      },
      {
        route: 'todos',
        name: 'todos',
        moduleId: 'modules/todos',
        title: 'Todos',
        auth: true
      }
    ]);
  }
}