import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
})
export class ListaComponent implements OnInit {
  
  users: Usuario[] = [];

  constructor( private service: UsuarioService ){}

  ngOnInit(): void {
    this.service.getUsers().subscribe((res: any) => {
      console.log(res);
      
      this.users = res;
    }
    )
  }

}
