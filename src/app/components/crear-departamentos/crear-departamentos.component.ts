import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Departamento } from 'src/app/models/departamentos';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-departamentos',
  templateUrl: './crear-departamentos.component.html',
  styleUrls: ['./crear-departamentos.component.css']
})
export class CrearDepartamentosComponent implements OnInit {
  @ViewChild("cajanumero") cajaNumero!: ElementRef;
  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  @ViewChild("cajalocalidad") cajaLocalidad!: ElementRef;


  constructor(private _service: DepartamentosService, private _router: Router) { }

  ngOnInit(): void {

  }

  crearDepartamento(){

    var departamento = new Departamento(
      parseInt(this.cajaNumero.nativeElement.value),
      this.cajaNombre.nativeElement.value,
      this.cajaLocalidad.nativeElement.value
    )

    this._service.postDepartamento(departamento).subscribe(response => {
      this._router.navigateByUrl("/departamentos")
    })

  }

}
