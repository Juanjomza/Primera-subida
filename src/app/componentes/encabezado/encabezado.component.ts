import { Component, OnInit } from '@angular/core';
import { MiportfolioService } from 'src/app/servicios/miportfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  persona:any

  constructor(private miServicio:MiportfolioService) { }

  ngOnInit(): void {
   this.miServicio.obtenerDatosPersona().subscribe(data => {
     console.log(data);
     this.persona=data ["Persona"];
   });
  }

}
