import { Injectable } from '@angular/core';
import { Patient } from '../model/patient.model';
import { SERVICE } from '../model/SERVICER.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {


  patients : Patient[];
  services :SERVICE[];
  constructor() {  
    
    this.services=
      [ {idSer : 1, nomSer : "maladies des yeux"},{idSer : 2, nomSer : "grippe et fievre"}];

 
    this.patients = [
    {idPatient : 1, nomPatient : "aymen",  prenomPatient: "difallah", datenaiss : new Date("01/14/2011"), service:{idSer : 1, nomSer : "maladies des yeux"}},
    {idPatient : 2, nomPatient : "bechir",  prenomPatient: "hammami", datenaiss : new Date("12/17/2010"),service:{idSer : 2, nomSer : "maladies rares"}},
    {idPatient : 3, nomPatient :"farah",  prenomPatient:" yed3es", datenaiss : new Date("02/20/2020"),service:{idSer : 3, nomSer : "serveaux"}}
 ];
}
listePatient():Patient[]{
  return this.patients;
}

 ajoutPatient(patient:Patient){
this.patients .push(patient);

 }

supprimerPatient( pas: Patient){
  //supprimer le produit prod du tableau produits
  const index = this.patients.indexOf(pas, 0);
  if (index > -1) {
  this.patients.splice(index, 1);
  }
  //ou Bien
  /* this.produits.forEach((cur, index) => {
  if(prod.idProduit === cur.idProduit) {
  this.produits.splice(index, 1);
  }
  }); */
  }




  consulterPatient(id:number): Patient{
    return this.patients.find(p => p.idPatient == id)!;
 
    }

    trierPatients(){
      this.patients = this.patients.sort((n1,n2) => {
      if (n1.idPatient! > n2.idPatient!) 
      {
      return 1;
      }
      if (n1.idPatient! < n2.idPatient!) 
      {
      return -1;
      }
      return 0;
      });
      }
    updatePatient(p:Patient): void
    {
    // console.log(p);
    this.supprimerPatient(p);
    this.ajoutPatient(p);
    this.trierPatients();
    }

    listeServices():SERVICE[] {
      return this.services;
      }
      consulterServices(id:number): SERVICE{
      return this.services.find(ser => ser.idSer == id)!;

      }




}
