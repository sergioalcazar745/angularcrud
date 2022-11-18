import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departamento } from "../models/departamentos";

@Injectable()
export class DepartamentosService{

    constructor(private _http: HttpClient){}

    getDepartamentos(): Observable<any>{

        var request = environment.url + "api/departamentos";
        return this._http.get(request);

    }

    getDepartamentosById(id:any): Observable<any>{

        var request = environment.url + "api/departamentos/" + id;
        return this._http.get(request);

    }

    deleteDepartamentosById(id:any): Observable<any>{
        
        var request = environment.url + "api/departamentos/" + id;
        return this._http.delete(request)

    }

    postDepartamento(departamento: Departamento){

        console.log(departamento)
        var json = JSON.stringify(departamento);
        console.log(json)
        var header = new HttpHeaders().set("Content-Type", "application/json")
        var request =  environment.url + "api/departamentos";
        console.log(request)
        return this._http.post(request, json, {headers: header});

    }

    putDepartamento(departamento: Departamento){

        var json = JSON.stringify(departamento);
        var header = new HttpHeaders().set("Content-Type", "application/json")
        var request =  environment.url + "api/departamentos";
        return this._http.put(request, json, {headers: header});

    }

    getEmpleadosByDepartamentoId(id:any): Observable<any>{

        var request = environment.urlEmpleados + "api/Empleados/EmpleadosDepartamento/" + id;
        return this._http.get(request);

    }

}