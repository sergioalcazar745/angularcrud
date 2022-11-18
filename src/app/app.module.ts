import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { DepartamentosService } from './services/departamentos.service';
import { CrearDepartamentosComponent } from './components/crear-departamentos/crear-departamentos.component';
import { DetallesDepartamentoComponent } from './components/detalles-departamento/detalles-departamento.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    DepartamentosComponent,
    CrearDepartamentosComponent,
    DetallesDepartamentoComponent,
    EmpleadosComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders, DepartamentosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
