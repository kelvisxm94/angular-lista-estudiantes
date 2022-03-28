import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  alumnos: any[] = [
    {
      nombre: "Kelvis",
      apellido: "Martinez",
      materiaUno: 10,
      materiaDos: 20,
      materiaTres: 15,
      promedio: (10+20+15) / 3,
    },
    {
      nombre: "Antonio",
      apellido: "Perez",
      materiaUno: 20,
      materiaDos: 5,
      materiaTres: 3,
      promedio: (20+5+3) / 3,
    },
    {
      nombre: "Juan",
      apellido: "Fernandez",
      materiaUno: 10,
      materiaDos: 15,
      materiaTres: 13,
      promedio: (10+15+13) / 3,
    },
    {
      nombre: "Rodrigo",
      apellido: "Fuentes",
      materiaUno: 2,
      materiaDos: 8,
      materiaTres: 20,
      promedio: (2+8+20) / 3,
    },
    {
      nombre: "Diana",
      apellido: "Perez",
      materiaUno: 20,
      materiaDos: 17,
      materiaTres: 16,
      promedio: (20+17+16) / 3,
    },
    {
      nombre: "Maria",
      apellido: "Mendoza",
      materiaUno: 20,
      materiaDos: 20,
      materiaTres: 20,
      promedio: (20+20+20) / 3,
    }
  ]

  ngOnInit(): void {
  }

}
