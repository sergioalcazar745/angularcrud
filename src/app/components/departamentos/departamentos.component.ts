import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamentos';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {
  public departamentos!: Array<Departamento>;
  public loading: boolean = true

  constructor(private _service: DepartamentosService, private _activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe((parametros: Params) => {
      if(parametros['id'] != undefined){
        this.eliminar(parametros['id'])
      }
      this.getDepartamentos()
    })
  }

  getDepartamentos(){
    this._service.getDepartamentos().subscribe(response => {
      this.departamentos = response;
      this.loading = false;
    })
  }

  modalEliminar(id: any){
    Swal.fire({
      title: '¿Estas seguro?',
      text: "No podrás revertir esta operacion",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    }).then((result:any) => {
      if (result.isConfirmed) {
        this.loading = true;
        this.eliminar(id)
      }
    })
  }

  eliminar(id:any){
    this._service.deleteDepartamentosById(id).subscribe(response => {
      this.getDepartamentos();
      this.loading = false;
    })
  }

  filtrarEmpleados(id:any){
    this._service.getEmpleadosByDepartamentoId(id).subscribe(response => {
      
    })
  }

}
