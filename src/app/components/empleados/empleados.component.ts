import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  public empleados!: Array<Empleado>

  constructor(private _service: DepartamentosService, private _activateRoute: ActivatedRoute, private _route: Router) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe((parametros: Params) => {
      this.getEmpleados(parametros['id']);
    })
  }

  getEmpleados(id:any){
    this._service.getEmpleadosByDepartamentoId(id).subscribe(response => {
      this.empleados = response
      console.log(response)
    });
  }

}
