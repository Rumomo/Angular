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
import { EjDirectivaNGIfComponent } from './ej-directiva-ngif/ej-directiva-ngif.component';
import { EjDirectivaNGStyleComponent } from './ej-directiva-ngstyle/ej-directiva-ngstyle.component';
import { EjDirectivaNGClassComponent } from './ej-directiva-ngclass/ej-directiva-ngclass.component';
import { EjDirectivaNGForComponent } from './ej-directiva-ngfor/ej-directiva-ngfor.component';
import { EjArrayObjetosComponent } from './ej-array-objetos/ej-array-objetos.component';
import { EjDirectivaNGSiwtchComponent } from './ej-directiva-ngsiwtch/ej-directiva-ngsiwtch.component';
import { MenuItemDirective } from './menu-item.directive';
import { EjMiDirectivaComponent } from './ej-mi-directiva/ej-mi-directiva.component';
import { HijoComponent } from './hijo/hijo.component';
import { PadreComponent } from './padre/padre.component';
import { EuroPipe } from './euro.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FechaActualComponent,
    CopyrightComponent,
    ViewModeloComponent,
    EjemMetodoComponent,
    EjPropertyBindingComponent,
    EjEventBindingComponent,
    Ej2WayBindingComponent,
    EjDirectivaNGIfComponent,
    EjDirectivaNGStyleComponent,
    EjDirectivaNGClassComponent,
    EjDirectivaNGForComponent,
    EjArrayObjetosComponent,
    EjDirectivaNGSiwtchComponent,
    MenuItemDirective,
    EjMiDirectivaComponent,
    HijoComponent,
    PadreComponent,
    EuroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
