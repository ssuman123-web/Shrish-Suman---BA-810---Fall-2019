define('app',["exports", "aurelia-auth"], function (_exports, _aureliaAuth) {
  "use strict";

  _exports.__esModule = true;
  _exports.App = void 0;

  var App =
  /*#__PURE__*/
  function () {
    function App() {}

    var _proto = App.prototype;

    _proto.configureRouter = function configureRouter(config, router) {
      this.router = router; // config.addPipelineStep('authorize', AuthorizeStep); 

      config.title = 'Widgets Universe!';
      config.map([{
        route: ['', 'widgets'],
        name: 'widgets',
        moduleId: 'modules/widgets',
        title: 'Widgets',
        auth: false
      }]);
    };

    return App;
  }();

  _exports.App = App;
});;
define('text!app.html',[],function(){return "<template>\n  <router-view></router-view>\n</template>\n";});;
define('auth-config',["exports"], function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  var authConfig = {
    baseUrl: "http://localhost:5000/api",
    loginUrl: '/users/login',
    tokenName: 'token',
    authHeader: 'Authorization',
    authToken: '',
    logoutRedirect: '#/home'
  };
  var _default = authConfig;
  _exports.default = _default;
});;
define('environment',["exports"], function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  var _default = {
    debug: true,
    testing: true
  };
  _exports.default = _default;
});;
define('main',["exports", "regenerator-runtime/runtime", "./environment", "./auth-config"], function (_exports, _runtime, _environment, _authConfig) {
  "use strict";

  _exports.__esModule = true;
  _exports.configure = configure;
  _environment = _interopRequireDefault(_environment);
  _authConfig = _interopRequireDefault(_authConfig);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  // regenerator-runtime is to support async/await syntax in ESNext.
  // If you don't use async/await, you can remove regenerator-runtime.
  function configure(aurelia) {
    aurelia.use.standardConfiguration().plugin('aurelia-auth', function (baseConfig) {
      baseConfig.configure(_authConfig.default);
    }).feature('resources');
    aurelia.use.developmentLogging(_environment.default.debug ? 'debug' : 'warn');

    if (_environment.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});;
define('text!modules/components/editUser.html',[],function(){return "<template>\r\n            First Name: <input value.bind=\"user.fname\">\r\n            Last Name: <input value.bind=\"user.lname\">\r\n            Active: <input value.bind=\"user.active\">\r\n            Role: <input value.bind=\"user.role\">\r\n            Email: <input value.bind=\"user.email\">\r\n            Password: <input value.bind=\"user.password\">\r\n            <button click.trigger=\"save()\">Save</button>\r\n        </template>\r\n        ";});;
define('text!modules/components/gadgetsForm.html',[],function(){return "<template>\r\n    <form>\r\n        <div class=\"form-group\">\r\n            <label for=\"widgetInput\">Boo</label>\r\n            <input value.bind=\"widget.selectedWidget.Boo\" type=\"text\" class=\"form-control\" placeholder=\"Boo title\">\r\n        </div>\r\n      \r\n            <!--         <div class =\"form-group\">\r\n                <label for=\"widgetDetail\">Hoo</label>\r\n                <textarea value.bind=\"widget.selectedWidget.Hoo\" class=\"form-control\" placeholder=\"Hoo Number\" id=\"widgetDetail\" rows=\"1\"></textarea> -->\r\n             <!-- <div class=\"form-group\">\r\n                <label for=\"gadgetStatus\">Status</label>\r\n                <select value.bind=\"gadget.selectedGadget.status\" class=\"form-control\" id=\"gadgetStatus\">\r\n                    <option repeat.for=\"status of statuses\" model.bind=\"status\">${status}</option>\r\n                </select>\r\n            </div>\r\n        </div> -->\r\n        <div class=\"form-group\">\r\n                <label for=\"widgetDetail\">Hoo</label>\r\n                <flat-picker controlid=\"startdate\" value.bind=\"widget.selectedWidget.Hoo\"></flat-picker>\r\n            </div>\r\n            <button class=\"btn btn-primary\" click.trigger=\"saveWidget()\">Save</button>\r\n            <button class=\"btn btn-primary\" click.trigger=\"Cancel()\">Cancel</button>\r\n    </form>\r\n</template>";});;
define('text!modules/components/gadgetsTable.html',[],function(){return "<template>\r\n    <button class=\"btn btn-primary\" click.trigger=\"newWidget()\" style=\"margin-bottom:10px;\">Create Widget</button>\r\n    <table class=\"table\">\r\n        <thead>\r\n            <!-- <tr>\r\n                <th colspan=\"3\">\r\n                    <div class=\"checkbox leftMargin\"><label><input checked.bind=\"isCheckedCompleted\" type=\"checkbox\">\r\n                            Filter out Completed Gadgets</label></div>\r\n                </th>\r\n            </tr> -->\r\n            <tr>\r\n                 <th scope=\"col\">Boo</th>\r\n                <th scope=\"col\">Hoo</th>\r\n                <!-- <th scope=\"col\">Status</th> -->\r\n                        <th></th>\r\n                      \r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr repeat.for=\"widget of widget.widgetsArray | filterWidgets:isCheckedCompleted\">\r\n                    <td scope=\"row\" click.delegate=\"editWidget(widget)\">${widget.Boo}</td>\r\n                <td scope=\"row\" click.delegate=\"editWidget(widget)\">${widget.Hoo}</td>\r\n                <!-- <td><select change.delegate=\"updateGadget(gadget)\" value.bind=\"gadget.status\" class=\"form-control\"\r\n                        id=\"gadgetStatus\">\r\n                        <option repeat.for=\"status of statuses\" value.bind=\"status\">${status}</option>\r\n                    </select></td> -->\r\n                <!-- <td>${gadget.dateDue | dateFormat}</td> -->\r\n                <td>\r\n                    <button click.trigger=\"deleteWidget(widget)\" type=\"button\" class=\"btn btn-danger btn-sm\">Delete</button>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</template>";});;
define('text!modules/components/widgetsForm.html',[],function(){return "<template>\r\n    <form>\r\n        <div class=\"form-group\">\r\n            <label for=\"widgetInput\">Boo</label>\r\n            <input value.bind=\"widget.selectedWidget.Boo\" type=\"text\" class=\"form-control\" placeholder=\"Boo title\">\r\n        </div>\r\n      \r\n                    <div class =\"form-group\">\r\n                <label for=\"widgetDetail\">Hoo</label>\r\n                <textarea value.bind=\"widget.selectedWidget.Hoo\" class=\"form-control\" placeholder=\"Hoo Number\" id=\"widgetDetail\" rows=\"1\"></textarea>\r\n             <!-- <div class=\"form-group\">\r\n                <label for=\"gadgetStatus\">Status</label>\r\n                <select value.bind=\"gadget.selectedGadget.status\" class=\"form-control\" id=\"gadgetStatus\">\r\n                    <option repeat.for=\"status of statuses\" model.bind=\"status\">${status}</option>\r\n                </select>\r\n            </div>\r\n        </div> -->\r\n        <!-- <div class=\"form-group\">\r\n                <label for=\"gadgetStatus\">Due Date</label>\r\n                <flat-picker controlid=\"startdate\" value.bind=\"gadget.selectedGadget.dateDue\"></flat-picker> -->\r\n            </div>\r\n            <button class=\"btn btn-primary\" click.trigger=\"saveWidget()\">Save</button>\r\n            <button class=\"btn btn-primary\" click.trigger=\"Cancel()\">Cancel</button>\r\n    </form>\r\n</template>";});;
define('text!modules/components/widgetsTable.html',[],function(){return "<template>\r\n    <button class=\"btn btn-primary\" click.trigger=\"newWidget()\" style=\"margin-bottom:10px;\">Create Widget</button>\r\n    <table class=\"table\">\r\n        <thead>\r\n            <!-- <tr>\r\n                <th colspan=\"3\">\r\n                    <div class=\"checkbox leftMargin\"><label><input checked.bind=\"isCheckedCompleted\" type=\"checkbox\">\r\n                            Filter out Completed Gadgets</label></div>\r\n                </th>\r\n            </tr> -->\r\n            <tr>\r\n                 <th scope=\"col\">Boo</th>\r\n                <th scope=\"col\">Hoo</th>\r\n                <!-- <th scope=\"col\">Status</th> -->\r\n                        <th></th>\r\n                      \r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr repeat.for=\"widget of widget.widgetsArray | filterWidgets:isCheckedCompleted\">\r\n                    <td scope=\"row\" click.delegate=\"editWidget(widget)\">${widget.Boo}</td>\r\n                <td scope=\"row\" click.delegate=\"editWidget(widget)\">${widget.Hoo}</td>\r\n                <!-- <td><select change.delegate=\"updateGadget(gadget)\" value.bind=\"gadget.status\" class=\"form-control\"\r\n                        id=\"gadgetStatus\">\r\n                        <option repeat.for=\"status of statuses\" value.bind=\"status\">${status}</option>\r\n                    </select></td> -->\r\n                <!-- <td>${gadget.dateDue | dateFormat}</td> -->\r\n                <td>\r\n                    <button click.trigger=\"deleteWidget(widget)\" type=\"button\" class=\"btn btn-danger btn-sm\">Delete</button>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</template>";});;
define('modules/home',["exports", "aurelia-framework", "aurelia-router"], function (_exports, _aureliaFramework, _aureliaRouter) {
  "use strict";

  _exports.__esModule = true;
  _exports.Home = void 0;

  var _dec, _class;

  var Home = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router), _dec(_class =
  /*#__PURE__*/
  function () {
    function Home(router) {
      this.router = router;
      this.message = 'Home';
    }

    var _proto = Home.prototype;

    _proto.login = function login() {
      this.router.navigate('users');
    };

    return Home;
  }()) || _class);
  _exports.Home = Home;
});;
define('text!modules/home.html',[],function(){return "<template>\r\n\t<h1>${message}</h1>\r\n\t<button class=\"btn btn-primary\" click.trigger=\"login()\">Login</button>\r\n</template>\r\n";});;
define('modules/users',["exports", "aurelia-framework", "aurelia-router", "../resources/data/user-object"], function (_exports, _aureliaFramework, _aureliaRouter, _userObject) {
  "use strict";

  _exports.__esModule = true;
  _exports.Users = void 0;

  var _dec, _class;

  var Users = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router, _userObject.User), _dec(_class =
  /*#__PURE__*/
  function () {
    function Users(router, users) {
      this.router = router;
      this.users = users;
      this.message = 'Users';
    }

    var _proto = Users.prototype;

    _proto.newUser = function newUser() {
      this.user = {
        fname: "",
        lname: "",
        active: true,
        role: "user",
        email: "",
        password: ""
      };
    };

    _proto.save = function save() {
      return regeneratorRuntime.async(function save$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(this.user && this.user.fname && this.user.lname && this.user.email && this.user.password)) {
                _context.next = 3;
                break;
              }

              _context.next = 3;
              return regeneratorRuntime.awrap(this.users.saveUser(this.user));

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    };

    _proto.logout = function logout() {
      this.router.navigate('home');
    };

    return Users;
  }()) || _class);
  _exports.Users = Users;
});;
define('text!modules/users.html',[],function(){return "<template>\r\n        <h1>${message}</h1>\r\n        <button click.trigger=\"newUser()\">New User</button>\r\n         <compose view=\"./components/editUser.html\"></compose>\r\n</template>";});;
define('modules/widgets',["exports", "aurelia-framework", "../resources/data/widget-object"], function (_exports, _aureliaFramework, _widgetObject) {
  "use strict";

  _exports.__esModule = true;
  _exports.Widgets = void 0;

  var _dec, _class;

  var Widgets = (_dec = (0, _aureliaFramework.inject)(_widgetObject.Widget), _dec(_class =
  /*#__PURE__*/
  function () {
    function Widgets(widget) {
      this.widget = widget; //this.userObj = JSON.parse(sessionStorage.getItem('userObj'));

      this.statuses = ['Widget', 'In Process', 'Completed'];
      this.isCheckedCompleted = true;
      this.showForm = false;
    }

    var _proto = Widgets.prototype;

    _proto.attached = function attached() {
      return regeneratorRuntime.async(function attached$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(this.getWidgets());

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    };

    _proto.getWidgets = function getWidgets() {
      return regeneratorRuntime.async(function getWidgets$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(this.widget.getWidgets());

            case 2:
              this.showForm = false;

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    };

    _proto.updateWidget = function updateWidget(widget) {
      this.widget.selectedWidget = widget;
      this.saveWidget();
    };

    _proto.newWidget = function newWidget() {
      this.widget.newWidget();
      this.showForm = true;
    };

    _proto.editWidget = function editWidget(widget) {
      this.widget.selectedWidget = widget;
      this.showForm = true;
    };

    _proto.saveWidget = function saveWidget() {
      return regeneratorRuntime.async(function saveWidget$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(this.widget.saveWidget());

            case 2:
              this.getWidgets();

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    };

    _proto.deleteWidget = function deleteWidget(widget) {
      return regeneratorRuntime.async(function deleteWidget$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(this.widget.deleteWidget(widget._id));

            case 2:
              this.getWidgets();

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this);
    };

    _proto.Cancel = function Cancel() {
      this.showForm = false;
    };

    return Widgets;
  }()) || _class);
  _exports.Widgets = Widgets;
});;
define('text!modules/widgets.html',[],function(){return "<template>\r\n    <div class=\"container\" style=\"margin-top:75px;\">\r\n        <compose show.bind=\"!showForm\" view=\"./components/gadgetsTable.html\"></compose>\r\n        <compose show.bind=\"showForm\" view=\"./components/gadgetsForm.html\"></compose>\r\n    </div>\r\n</template>\r\n";});;
define('resources/data/data-services',["exports", "aurelia-framework", "aurelia-fetch-client"], function (_exports, _aureliaFramework, _aureliaFetchClient) {
  "use strict";

  _exports.__esModule = true;
  _exports.DataServices = void 0;

  var _dec, _class;

  var DataServices = (_dec = (0, _aureliaFramework.inject)(_aureliaFetchClient.HttpClient), _dec(_class =
  /*#__PURE__*/
  function () {
    function DataServices(http) {
      var _this = this;

      this.httpClient = http;
      this.BASE_URL = "http://localhost:5000/api/";
      this.httpClient.configure(function (config) {
        config.withBaseUrl(_this.BASE_URL).withDefaults({
          credentials: 'same-origin',
          headers: {
            'Accept': 'application/json',
            'X-Requested-With': 'Fetch',
            'Authorization': 'Bearer' + localStorage.getItem('aurelia_token')
          }
        }).withInterceptor({
          request: function request(_request) {
            //console.log('Requesting ${request.method} ${request.url}');
            return _request;
          },
          response: function response(_response) {
            // console.log('Received ${response.status} ${response.url}');
            return _response;
          }
        });
      });
    }

    var _proto = DataServices.prototype;

    _proto.get = function get(url) {
      return this.httpClient.fetch(url).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data;
      }).catch(function (error) {
        return error;
      });
    };

    _proto.post = function post(content, url) {
      return this.httpClient.fetch(url, {
        method: 'post',
        body: (0, _aureliaFetchClient.json)(content)
      }).then(function (response) {
        return response.json();
      }).then(function (object) {
        return object;
      }).catch(function (error) {
        return error;
      });
    };

    _proto.put = function put(content, url) {
      return this.httpClient.fetch(url, {
        method: 'put',
        body: (0, _aureliaFetchClient.json)(content)
      }).then(function (response) {
        return response.json();
      }).then(function (object) {
        return object;
      }).catch(function (error) {
        return error;
      });
    };

    _proto.delete = function _delete(url) {
      return this.httpClient.fetch(url, {
        method: 'delete'
      }).then(function (response) {
        return response.json();
      }).then(function (object) {
        return object;
      }).catch(function (error) {
        return error;
      });
    };

    return DataServices;
  }()) || _class);
  _exports.DataServices = DataServices;
});;
define('resources/data/user-object',["exports", "aurelia-framework", "./data-services"], function (_exports, _aureliaFramework, _dataServices) {
  "use strict";

  _exports.__esModule = true;
  _exports.User = void 0;

  var _dec, _class;

  var User = (_dec = (0, _aureliaFramework.inject)(_dataServices.DataServices), _dec(_class =
  /*#__PURE__*/
  function () {
    function User(data) {
      this.data = data;
      this.USER_SERVICE = 'users';
    }

    var _proto = User.prototype;

    _proto.saveUser = function saveUser(user) {
      var serverResponse;
      return regeneratorRuntime.async(function saveUser$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!user) {
                _context.next = 5;
                break;
              }

              _context.next = 3;
              return regeneratorRuntime.awrap(this.data.post(user, this.USER_SERVICE));

            case 3:
              serverResponse = _context.sent;
              return _context.abrupt("return", serverResponse);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    };

    return User;
  }()) || _class);
  _exports.User = User;
});;
define('resources/data/widget-object',["exports", "aurelia-framework", "./data-services"], function (_exports, _aureliaFramework, _dataServices) {
  "use strict";

  _exports.__esModule = true;
  _exports.Widget = void 0;

  var _dec, _class;

  var Widget = (_dec = (0, _aureliaFramework.inject)(_dataServices.DataServices), _dec(_class =
  /*#__PURE__*/
  function () {
    function Widget(data) {
      this.data = data;
      this.WIDGET_SERVICE = 'widgets';
    }

    var _proto = Widget.prototype;

    _proto.newWidget = function newWidget() {
      this.selectedWidget = {};
      this.selectedWidget.Boo = ""; // this.selectedWidget.Hoo="";
      //     this.selectedGadget.gadget= "";
      //     this.selectedGadget.detail = "";

      this.selectedWidget.Hoo = new Date(); //this.selectedGadget.status = "Gadget";
      //this.selectedGadget.userId = id;
      //this.selectedGadget.userObj="";
    };

    _proto.saveWidget = function saveWidget() {
      var serverResponse, url;
      return regeneratorRuntime.async(function saveWidget$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!this.selectedWidget) {
                _context.next = 12;
                break;
              }

              if (!this.selectedWidget._id) {
                _context.next = 8;
                break;
              }

              url = this.WIDGET_SERVICE + "/" + this.selectedWidget._id;
              _context.next = 5;
              return regeneratorRuntime.awrap(this.data.put(this.selectedWidget, url));

            case 5:
              serverResponse = _context.sent;
              _context.next = 11;
              break;

            case 8:
              _context.next = 10;
              return regeneratorRuntime.awrap(this.data.post(this.selectedWidget, this.WIDGET_SERVICE));

            case 10:
              serverResponse = _context.sent;

            case 11:
              return _context.abrupt("return", serverResponse);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    };

    _proto.getWidgets = function getWidgets(userid) {
      var url, response;
      return regeneratorRuntime.async(function getWidgets$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.widgetsArray = [];
              url = this.WIDGET_SERVICE; // + '/user/' + userid;

              _context2.next = 4;
              return regeneratorRuntime.awrap(this.data.get(url));

            case 4:
              response = _context2.sent;

              if (!response.error) {
                this.widgetsArray = response;
              } else {
                this.widgetsArray = [];
              }

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    };

    _proto.deleteWidget = function deleteWidget(id) {
      var url;
      return regeneratorRuntime.async(function deleteWidget$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              url = this.WIDGET_SERVICE + "/" + id;
              _context3.next = 3;
              return regeneratorRuntime.awrap(this.data.delete(url));

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    };

    return Widget;
  }()) || _class);
  _exports.Widget = Widget;
});;
define('resources/elements/flat-picker',["exports", "aurelia-framework", "flatpickr"], function (_exports, _aureliaFramework, _flatpickr) {
  "use strict";

  _exports.__esModule = true;
  _exports.FlatPickerCustomElement = void 0;
  _flatpickr = _interopRequireDefault(_flatpickr);

  var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  var FlatPickerCustomElement = (_dec = (0, _aureliaFramework.inject)(Element), _dec2 = (0, _aureliaFramework.bindable)({
    defaultBindingMode: _aureliaFramework.bindingMode.twoWay
  }), _dec(_class = (_class2 = (_temp =
  /*#__PURE__*/
  function () {
    function FlatPickerCustomElement(element) {
      this.backgroundColor = 'white';

      _initializerDefineProperty(this, "config", _descriptor, this);

      _initializerDefineProperty(this, "startdate", _descriptor2, this);

      _initializerDefineProperty(this, "enddate", _descriptor3, this);

      _initializerDefineProperty(this, "controlid", _descriptor4, this);

      _initializerDefineProperty(this, "disabled", _descriptor5, this);

      _initializerDefineProperty(this, "value", _descriptor6, this);

      this.element = element;
    }

    var _proto = FlatPickerCustomElement.prototype;

    _proto.bind = function bind() {
      var defaultConfig = {
        altInput: true,
        altFormat: "F j, Y",
        minDate: this.startdate,
        maxDate: this.enddate,
        wrap: true,
        onReady: function onReady(dateObj, dateStr, instance) {
          var $cal = $(instance.calendarContainer);

          if ($cal.find('.flatpickr-clear').length < 1) {
            $cal.append('<div class="flatpickr-clear">Clear</div>');
            $cal.find('.flatpickr-clear').on('click', function () {
              instance.clear();
              instance.close();
            });
          }
        }
      };
      this._config = Object.assign({}, defaultConfig, this.config);
      this._config.onChange = this._config.onMonthChange = this._config.onYearChange = this.onChange.bind(this);
    };

    _proto.attached = function attached() {
      this.flatpickr = new _flatpickr.default(this.element.querySelector('.aurelia-flatpickr'), this._config);
      this.valueChanged();
    };

    _proto.fireEvent = function fireEvent(element, type, data) {
      var changeEvent;

      if (window.CustomEvent) {
        changeEvent = new CustomEvent('change', {
          detail: {
            value: data
          },
          bubbles: true
        });
      } else {
        changeEvent = document.createEvent('CustomEvent');
        changeEvent.initCustomEvent('change', true, true, {
          detail: {
            value: data
          }
        });
      }

      this.element.dispatchEvent(changeEvent);
    };

    _proto.startdateChanged = function startdateChanged(newValue, oldValue) {
      if (this.flatpickr) {
        this.flatpickr.set("minDate", newValue);
      }
    };

    _proto.enddateChanged = function enddateChanged(newValue, oldValue) {
      if (this.flatpickr) {
        this.flatpickr.set("maxDate", newValue);
      }
    };

    _proto.onChange = function onChange(selectedDates, dateStr, instance) {
      var _this = this;

      if (!this._datesAreSynced(this.value, selectedDates)) {
        switch (selectedDates.length) {
          case 0:
            this.value = undefined;
            break;

          case 1:
            this.value = this._cloneDate(selectedDates[0]);
            break;

          default:
            this.value = selectedDates.map(function (d) {
              return _this._cloneDate(d);
            });
            break;
        }
      }

      this.fireEvent(this.element, 'changeBeginDate', {
        date: this.value
      });
    };

    _proto.clear = function clear() {
      if (!this.flatpickr) {
        return;
      } // this.flatpickr.clear();

    };

    _proto.valueChanged = function valueChanged() {
      var _this2 = this;

      if (!this.flatpickr) {
        return;
      }

      if (this._datesAreSynced(this.value, this.flatpickr.selectedDates)) {
        return;
      }

      var newDate;

      if (!this.value) {
        newDate = undefined;
      } else if (!Array.isArray(this.value)) {
        newDate = this._cloneDate(this.value);
      } else {
        newDate = this.value.map(function (d) {
          return _this2._cloneDate(d);
        });
      }

      this.flatpickr.setDate(newDate);
    };

    _proto._datesAreSynced = function _datesAreSynced(model, view) {
      model = model || [];
      var modelDates = Array.isArray(model) ? model : [model];

      var _loop = function _loop(d) {
        var modelDate = modelDates[d];

        if (view.findIndex(function (v) {
          return v.valueOf() === modelDate.valueOf();
        }) > -1) {
          return "continue";
        }

        return {
          v: false
        };
      };

      for (var d = 0; d < modelDates.length; d++) {
        var _ret = _loop(d);

        switch (_ret) {
          case "continue":
            continue;

          default:
            if (typeof _ret === "object") return _ret.v;
        }
      }

      var _loop2 = function _loop2(_d) {
        var viewDate = view[_d];

        if (modelDates.findIndex(function (m) {
          return m.valueOf() === viewDate.valueOf();
        }) > -1) {
          return "continue";
        }

        return {
          v: false
        };
      };

      for (var _d = 0; _d < view.length; _d++) {
        var _ret2 = _loop2(_d);

        switch (_ret2) {
          case "continue":
            continue;

          default:
            if (typeof _ret2 === "object") return _ret2.v;
        }
      }

      return true;
    };

    _proto._cloneDate = function _cloneDate(d) {
      return new Date(d.getTime ? d.valueOf() : d);
    };

    return FlatPickerCustomElement;
  }(), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "config", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return {};
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "startdate", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "enddate", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "controlid", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "disabled", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "value", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class2)) || _class);
  _exports.FlatPickerCustomElement = FlatPickerCustomElement;
});;
define('text!resources/elements/flat-picker.html',[],function(){return "<template>\n    <style>\n      .aurelia-flatpickr {\n        background-color: white !important;\n      }\n      .disable{\n        background-color: #eeeeee;\n      }\n    </style>\n    <require from=\"flatpickr/flatpickr.css\"></require>\n     <div class=\"input-group aurelia-flatpickr\">\n      <input type=\"text\" class=\"aurelia-flatpickr form-control enable\" placeholder=\"Select date\" data-input>\n      <span class=\"input-group-btn\">\n        <button style=\"height:39px;\" class=\"btn btn-default\" type=\"button\" data-clear><i class=\"fa fa-trash fa-border\"></i></button>\n      </span>\n  </div>\n</template>\n";});;
define('resources/elements/nav-bar',["exports", "aurelia-framework", "aurelia-router", "aurelia-auth"], function (_exports, _aureliaFramework, _aureliaRouter, _aureliaAuth) {
  "use strict";

  _exports.__esModule = true;
  _exports.NavBar = void 0;

  var _dec, _class;

  var NavBar = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router, _aureliaAuth.AuthService), _dec(_class =
  /*#__PURE__*/
  function () {
    function NavBar(router, auth) {
      this.authenticated = false;
      this.router = router;
      this.auth = auth;
      this.loginError = '';
      this.email = "";
      this.password = "";
    }

    var _proto = NavBar.prototype;

    _proto.attached = function attached() {
      $('.navbar-nav a').on('click', function () {
        $('.navbar-nav').find('li.active').removeClass('active');
        $(this).parent('li').addClass('active');
      });
    };

    _proto.login = function login() {
      var _this = this;

      //   console.log(this.email);
      //   console.log(this.password);
      //  this.authenticated = true;
      //  this.router.navigate('home');
      return this.auth.login(this.email, this.password).then(function (response) {
        _this.userObj = response.user;
        sessionStorage.setItem("userObj", JSON.stringify(_this.userObj));
        _this.loginError = "";
        _this.authenticated = _this.auth.isAuthenticated();

        _this.router.navigate('home');
      }).catch(function (error) {
        console.log(error);
        _this.authenticated = false;
        _this.loginError = "Invalid credentials.";
      });
    };

    _proto.logout = function logout() {
      // this.authenticated = false;
      //  this.router.navigate('landing');
      this.auth.logout();
      sessionStorage.removeItem('userObj');
      this.authenticated = this.auth.isAuthenticated();
    };

    _proto.bind = function bind() {
      this.authenticated = this.auth.isAuthenticated();
    };

    return NavBar;
  }()) || _class);
  _exports.NavBar = NavBar;
});;
define('text!resources/elements/nav-bar.html',[],function(){return "<template>\r\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <a class=\"navbar-brand\" href=\"#\">Widgets Universe!</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item active\">\r\n                <a class=\"nav-link\" href=\"#users\">Users <span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n                     <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#widgets\">Widgets</a>\r\n            </li>\r\n                    <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#logout\">Logout</a>\r\n            </li>\r\n                 \r\n        </ul>\r\n        <div show.bind=\"!authenticated\">\r\n            <form class=\"form-inline\">\r\n                <div class=\"form-group mb-2\">\r\n                    <label for=\"staticEmail2\" class=\"sr-only\">Email</label>\r\n                    <input value.bind=\"email\" type=\"text\" class=\"form-control\" id=\"staticEmail2\"\r\n                        placeholder=\"email@example.com\">\r\n                </div>\r\n                <div class=\"form-group mx-sm-3 mb-2\">\r\n                    <label for=\"inputPassword2\" class=\"sr-only\">Password</label>\r\n                    <input value.bind=\"password\" type=\"password\" class=\"form-control\" id=\"inputPassword2\"\r\n                        placeholder=\"Password\">\r\n                </div>\r\n                <button type=\"submit\" click.trigger=\"login()\" class=\"btn btn-primary mb-2\">Confirm identity</button>\r\n                <span style=\"margin-left: 20px;\" show.bind=\"loginError\">${loginError}</span>\r\n            </form>\r\n        </div>   \r\n    </div>\r\n      </nav>\r\n</template>";});;
define('resources/index',["exports"], function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.configure = configure;

  function configure(config) {
    config.globalResources(['./elements/nav-bar', './elements/flat-picker', './value-converters/date-format', './value-converters/filter-widgets']);
  }
});;
define('resources/value-converters/date-format',["exports", "moment"], function (_exports, _moment) {
  "use strict";

  _exports.__esModule = true;
  _exports.DateFormatValueConverter = void 0;
  _moment = _interopRequireDefault(_moment);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var DateFormatValueConverter =
  /*#__PURE__*/
  function () {
    function DateFormatValueConverter() {}

    var _proto = DateFormatValueConverter.prototype;

    _proto.toView = function toView(value) {
      if (value === undefined || value === null) {
        return;
      }

      return (0, _moment.default)(value).format('MMM Do YYYY');
    };

    return DateFormatValueConverter;
  }();

  _exports.DateFormatValueConverter = DateFormatValueConverter;
});;
define('resources/value-converters/filter-gadgets',["exports"], function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.FilterWidgetsValueConverter = void 0;

  var FilterWidgetsValueConverter =
  /*#__PURE__*/
  function () {
    function FilterWidgetsValueConverter() {}

    var _proto = FilterWidgetsValueConverter.prototype;

    _proto.toView = function toView(widgets, nofilterWidgets) {
      if (!widgets) return;
      if (nofilterWidgets) return widgets;
      var filteredWidgets = [];
      widgets.forEach(function (widget) {
        if (widget.status !== 'Completed') filteredWidgets.push(widget);
      });
      return filteredWidgets;
    };

    return FilterWidgetsValueConverter;
  }();

  _exports.FilterWidgetsValueConverter = FilterWidgetsValueConverter;
});;
define('resources/value-converters/filter-widgets',["exports"], function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.FilterWidgetsValueConverter = void 0;

  var FilterWidgetsValueConverter =
  /*#__PURE__*/
  function () {
    function FilterWidgetsValueConverter() {}

    var _proto = FilterWidgetsValueConverter.prototype;

    _proto.toView = function toView(widgets, nofilterWidgets) {
      if (!widgets) return;
      if (nofilterWidgets) return widgets;
      var filteredWidgets = [];
      widgets.forEach(function (widget) {
        if (widget.status !== 'Completed') filteredWidgets.push(widget);
      });
      return filteredWidgets;
    };

    return FilterWidgetsValueConverter;
  }();

  _exports.FilterWidgetsValueConverter = FilterWidgetsValueConverter;
});;
define('resources',['resources/index'],function(m){return m;});
//# sourceMappingURL=app-bundle.js.map