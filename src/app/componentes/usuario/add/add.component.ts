import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule,FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  private readonly router: Router;
  private readonly usuariosService: UsuariosService;
  private formBuilder: FormBuilder;
  public frmGroup: FormGroup;
  constructor(formBuilder : FormBuilder,
    usuariosService: UsuariosService,
    router: Router) {
      this.router = router;
      this.usuariosService = usuariosService;
      this.frmGroup = formBuilder.group({
        identificacion:[null,[Validators.required]],
        Genero:['',[Validators.required]],
        NombreUsuario:['',[Validators.required]],
        NumeroTelefono:[null,[Validators.required]],
        Correo:['',[Validators.required]]
      });
     }

  ngOnInit(): void {
  }

  public postForm(usuarios:Usuarios){
    const form: Usuarios = {
      correo: usuarios.correo,
      genero: usuarios.genero,
      identificacion: usuarios.identificacion,
      nombreUsuario: usuarios.nombreUsuario,
      numeroTelefono:usuarios.numeroTelefono
    };
    this.usuariosService.postUsuarios(form).subscribe(() =>{
      this.router.navigate(['list']);
    });
  }

}
