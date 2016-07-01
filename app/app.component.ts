import { Component } from 'angular2/core';

import { Empleado } from './Empleado';
import { EmpleadoDetailComponent } from './empleadosDetails.component';

@Component({
  selector: 'my-app',
  
  templateUrl:'app/principal.html',
     directives: [EmpleadoDetailComponent]
})
export class AppComponent {
  title = 'INVENTARIO';
 empleados:Array<Empleado>;
  selectedEmpleado: Empleado;

  constructor(){
        this.empleados=[
            new Empleado(1,"Brocha","12", "imagenes/brocha.bmp"),
            new Empleado(2,"foco","80", "imagenes/foco2.jpg"),
            new Empleado(3,"Cable","34", "imagenes/cable.jpg"),
            new Empleado(4,"Cinta Canela","22", "imagenes/cintaCanela.jpg"),
            new Empleado(5,"Desarmador","38", "imagenes/desarmador3.jpg"),
            new Empleado(6,"Carretilla","120", "imagenes/carretilla.jpg")
            
        ]}
     
  onSelect(emp: Empleado)
   { this.selectedEmpleado = emp; }
  
}

 
