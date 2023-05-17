
import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/model/patient.model';
import { SERVICE } from 'src/app/model/SERVICER.model';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html'

})

export class UpdatePatientComponent  implements OnInit{
  currentPatient =new Patient();
  services! : SERVICE[];
  updatedSerId! : number;


  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private patientService: PatientService)
  {}

  ngOnInit():void{
    this.services=this.patientService.listeServices();

    this.currentPatient=this.patientService.consulterPatient(this.activatedRoute.snapshot.params['id']);
   this.updatedSerId=this.currentPatient.service.idSer; 
  }
  updatePatient(){
    this.currentPatient.service=this.patientService.consulterServices(this.updatedSerId);

    this.patientService.updatePatient(this.currentPatient);
    this.router.navigate(['patients']);
  }

}
