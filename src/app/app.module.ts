import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { DatospersonalesComponent } from './componentes/datospersonales/datospersonales.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { OtrashabilidadesComponent } from './componentes/otrashabilidades/otrashabilidades.component';
import { HabsocialesComponent } from './componentes/habsociales/habsociales.component';
import { HttpClientModule} from "@angular/common/http"
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    DatospersonalesComponent,
    CursosComponent,
    EducacionComponent,
    OtrashabilidadesComponent,
    HabsocialesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
