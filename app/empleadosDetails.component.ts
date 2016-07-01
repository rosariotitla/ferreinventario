import { Component} from 'angular2/core';

import { Empleado } from './Empleado';

@Component({
  selector: 'my-empleado-detail',
     templateUrl:'app/empleadoDetails.html',
    
    inputs:['emp']
})
export class EmpleadoDetailComponent {
  
}
