import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { MiportfolioService } from 'src/app/servicios/miportfolio.service';

@Component({
  selector: 'app-datospersonales',
  templateUrl: './datospersonales.component.html',
  styleUrls: ['./datospersonales.component.css'],
})
export class DatospersonalesComponent implements OnInit {
  persona: any;
  usuarioAutenticado: boolean = true;
  form: FormGroup;
  constructor(private miServicio: MiportfolioService, private formBuilder: FormBuilder) {
    this.form=this.formBuilder.group({
     fullName:['',[Validators.required]],
     position:['', [Validators.required]],
     ubication:['',  [Validators.required]],
     mail:['',  [Validators.required]],
     contact:['' ,  [Validators.required]]
    })
  }
  ngOnInit(): void {
    this.miServicio.obtenerDatosPersona().subscribe((data) => {
      console.log(data);
      this.persona = data['Persona'];
    });
  }
  guardarDatos(){
   if (this.form.valid){

   }
   else{
     this.form.markAllAsTouched()
     alert("Hay campos no válidos")
   }
  }
  get fullName(){
    return this.form.get("fullName")
  }
  get position(){
    return this.form.get("position")
  }
  get ubication(){
    return this.form.get("ubication")}
  get contact(){
      return this.form.get("contact")  
  }
}
