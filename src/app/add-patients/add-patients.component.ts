import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Patient } from '../model/patient.model';
import { SERVICE } from '../model/SERVICER.model';
import { PatientService } from '../service/patient.service';
@Component({
  selector: 'app-add-patients',
  templateUrl: './add-patients.component.html',

})
export class AddPatientsComponent  implements OnInit{


  newPatient = new Patient();
  services ! :SERVICE[];
  newIdSer !:number;
  newService!:SERVICE;
  mes!: string;

  constructor(private patientService:PatientService,
               private router:Router
    ){}

ngOnInit():void{
  this.services=this.patientService.listeServices();

}
addPatient(){
  //console.log(this.newPatient);
this.patientService.ajoutPatient(this.newPatient);
this.newService=this.patientService.consulterServices(this.newIdSer);
this.newPatient.service=this.newService;
this.mes= "patient "+this.newPatient.nomPatient+" ajouter avec succès";
this.router.navigate(['patients']);
}



}