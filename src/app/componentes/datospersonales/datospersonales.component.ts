import { Component, OnInit } from '@angular/core';
import { MiportfolioService } from 'src/app/servicios/miportfolio.service';

@Component({
  selector: 'app-datospersonales',
  templateUrl: './datospersonales.component.html',
  styleUrls: ['./datospersonales.component.css'],
})
export class DatospersonalesComponent implements OnInit {
  persona: any;
  usuarioAutenticado: boolean = true;
  constructor(private miServicio: MiportfolioService) {}
  ngOnInit(): void {
    this.miServicio.obtenerDatosPersona().subscribe((data) => {
      console.log(data);
      this.persona = data['Persona'];
    });
  }
}
