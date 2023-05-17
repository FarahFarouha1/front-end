import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { AddPatientsComponent } from './add-patients/add-patients.component';
import { UpdatePatientComponent } from './service/update-patient/update-patient.component';



const routes: Routes = [
  {path: "patients", component : PatientsComponent},
  {path: "add-patients", component :  AddPatientsComponent},
  {path: "updatePatient/:id", component: UpdatePatientComponent},
  { path: "", redirectTo: "patients", pathMatch: "full" }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


