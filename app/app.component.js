System.register(['angular2/core', './Empleado', './empleadosDetails.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Empleado_1, empleadosDetails_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Empleado_1_1) {
                Empleado_1 = Empleado_1_1;
            },
            function (empleadosDetails_component_1_1) {
                empleadosDetails_component_1 = empleadosDetails_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'INVENTARIO';
                    this.empleados = [
                        new Empleado_1.Empleado(1, "Brocha", "12", "imagenes/brocha.bmp"),
                        new Empleado_1.Empleado(2, "foco", "80", "imagenes/foco2.jpg"),
                        new Empleado_1.Empleado(3, "Cable", "34", "imagenes/cable.jpg"),
                        new Empleado_1.Empleado(4, "Cinta Canela", "22", "imagenes/cintaCanela.jpg"),
                        new Empleado_1.Empleado(5, "Desarmador", "38", "imagenes/desarmador3.jpg"),
                        new Empleado_1.Empleado(6, "Carretilla", "120", "imagenes/carretilla.jpg")
                    ];
                }
                AppComponent.prototype.onSelect = function (emp) { this.selectedEmpleado = emp; };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/principal.html',
                        directives: [empleadosDetails_component_1.EmpleadoDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map