import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { AddPatientsComponent } from './add-patients/add-patients.component';
import { FormsModule } from '@angular/forms';
import { UpdatePatientComponent } from './service/update-patient/update-patient.component';
@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    AddPatientsComponent,
    UpdatePatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
