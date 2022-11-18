import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrearDepartamentosComponent } from "./components/crear-departamentos/crear-departamentos.component";
import { DepartamentosComponent } from "./components/departamentos/departamentos.component";
import { DetallesDepartamentoComponent } from "./components/detalles-departamento/detalles-departamento.component";
import { EmpleadosComponent } from "./components/empleados/empleados.component";
import { HomeComponent } from "./components/home/home.component";

const appRoutes: Routes = [
    {
        path: "", component: HomeComponent
    },

    {
        path: "departamentos", component: DepartamentosComponent
    },

    {
        path: "departamentos/:id", component: DepartamentosComponent
    },

    {
        path: "crear-departamento", component: CrearDepartamentosComponent
    },

    {
        path: "detalles-departamento/:id", component: DetallesDepartamentoComponent
    },

    {
        path: "empleados", component: EmpleadosComponent
    },
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)