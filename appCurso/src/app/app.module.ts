import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FechaActualComponent } from './fechaActual/fechaActual.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ViewModeloComponent } from './view-modelo/view-modelo.component';
import { EjemMetodoComponent } from './ejem-metodo/ejem-metodo.component';
import { EjPropertyBindingComponent } from './ej-property-binding/ej-property-binding.component';
import { EjEventBindingComponent } from './ej-event-binding/ej-event-binding.component';
import { Ej2WayBindingComponent } from './ej2-way-binding/ej2-way-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    FechaActualComponent,
    CopyrightComponent,
    ViewModeloComponent,
    EjemMetodoComponent,
    EjPropertyBindingComponent,
    EjEventBindingComponent,
    Ej2WayBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
