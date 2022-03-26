import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/servicios/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos: any;

  constructor(private miServicio:CursosService) { }

  ngOnInit(): void {
    this.miServicio.obtenerCursosPersona().subscribe(data =>{
      this.cursos = data ["cursos"] 
    })
  }

}
