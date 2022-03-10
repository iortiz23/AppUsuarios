import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  /**
  * A service that provides navigation among views and URL manipulation capabilities.
  */
   private readonly router: Router;
   /**
    * A service that provides navigation among views and URL manipulation capabilities.
    */
   private readonly activatedRoute: ActivatedRoute;
   /**
    * Servicio encargado de realizar la comunicación con la Api
    */
   private readonly usuariosService: UsuariosService;
   /**
    * Permite la configuración de los campos del formulario
    */
   public formBuilder: FormBuilder;
   /**
    * Permite crear grupos de controles para un formulario
    */
   public frmGroup: FormGroup;
 
   /**
    * Crea una nueva instancia de la clase
    */
   public constructor(
     formBuilder: FormBuilder,
     usuariosService: UsuariosService,
     router: Router,
     activatedRoute: ActivatedRoute
   ) {
     this.router = router;
     this.usuariosService = usuariosService;
     this.activatedRoute = activatedRoute;
 
     this.frmGroup = formBuilder.group({
       id:[0],
      identificacion:[null,[Validators.required]],
      Genero:['',[Validators.required]],
      NombreUsuario:['',[Validators.required]],
      NumeroTelefono:[null,[Validators.required]],
      Correo:['',[Validators.required]]
    });
   }
 
   public ngOnInit(): void {
     // se obtiene el ID a modificar
     const productoId = this.activatedRoute.snapshot.paramMap.get('id');
 
     // Se realiza búsqueda del registro para mapear los datos en los campos
     /*this.usuariosService
       .getUsuariosById(Number(productoId))
       .subscribe((response) => {
         this.frmGroup.setValue({
           nombreProducto: response.nombreProducto,
           unidadesExistentes: response.unidadesExistentes,
           valorProducto: response.valorProducto,
           descripcion: response.descripcion,
           id: response.id,
         });
       });*/
   }
 public putfrom(usuarios: Usuarios) {

   this.usuariosService.putUsuarios(usuarios).subscribe(
     () => {
       this.router.navigate(['list']);
     },
     (error) => console.log(error)
   );
 }
}
