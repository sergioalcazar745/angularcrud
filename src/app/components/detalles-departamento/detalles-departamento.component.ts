import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Departamento } from 'src/app/models/departamentos';

@Component({
  selector: 'app-detalles-departamento',
  templateUrl: './detalles-departamento.component.html',
  styleUrls: ['./detalles-departamento.component.css']
})
export class DetallesDepartamentoComponent implements OnInit {
  public departamento!: Departamento;

  @ViewChild("cajanumero") cajaNumero!: ElementRef;
  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  @ViewChild("cajalocalidad") cajaLocalidad!: ElementRef;

  constructor(private _service: DepartamentosService, private _activateRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe((parametros: Params) =>{
      this.getDepartamentoById(parametros['id']);
    })

  }

  getDepartamentoById(id: any){
    this._service.getDepartamentosById(id).subscribe(response => {
      this.departamento = response;
    })
  }

  modificarDepartamento(){
    console.log("Hola")
    var departamento = new Departamento(
      parseInt(this.cajaNumero.nativeElement.value),
      this.cajaNombre.nativeElement.value,
      this.cajaLocalidad.nativeElement.value
    )

    this._service.putDepartamento(departamento).subscribe(response => {
      console.log(response)
      this._router.navigateByUrl("/departamentos")
    })
  }

}
