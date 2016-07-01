System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Empleado;
    return {
        setters:[],
        execute: function() {
            Empleado = (function () {
                function Empleado(id, n, e, p) {
                    this.id = id;
                    this.name = n;
                    this.email = e;
                    this.puesto = p;
                }
                return Empleado;
            }());
            exports_1("Empleado", Empleado);
        }
    }
});
//# sourceMappingURL=Empleado.js.map