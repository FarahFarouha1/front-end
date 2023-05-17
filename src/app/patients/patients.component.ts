import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient.model';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  
})

export class PatientsComponent implements OnInit{
  patients? : Patient[];
  
constructor( private patientService:PatientService){
//this.patients[]
}

ngOnInit(): void{
  this.patients=this.patientService.listePatient();
}
supprimerPatient(pas : Patient)
{
 // console.log(pas);
 let conf = confirm("Etes-vous sûr ?");
 if (conf)
 this.patientService.supprimerPatient(pas);
}

}