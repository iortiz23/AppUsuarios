import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

   /**
   * A service that provides navigation among views and URL manipulation capabilities.
   */
    private readonly router: Router;
    /**
     * Servicio encargado de realizar la comunicación con la Api
     */
    private readonly usuariosService: UsuariosService;
    /**
     * Lista de productos
     */
    public usuarios: Usuarios;
  
    public constructor(usuariosService: UsuariosService, router: Router) {
      this.usuariosService = usuariosService;
      this.router = router;
    }
  
    currentPage = 1;
    itemsPerPage = 10;
    pageSize: number;
    longitud: number;
  
    /**
     * Se ejecuta cuando se inicializa el componente
     */
    public ngOnInit(): void {
      this.usuariosService.getUsuarios().subscribe((response) => {
        this.usuarios = response;
      });
    }
 /**
    * Método encargado de direccionarlo al módulo de edición
    * @param id del registro a editar
    */
  public editarproducto(id: number) {
   /*this.usuariosService.getUsuariosById(id).subscribe((data) => {
     this.router.navigate(['edit', data.id]);
   });*/
 }
 
 /**
  * Método encargado de eliminar el registro seleccionado
  */
 public deleteProducto(id: number) {
   this.usuariosService.deleteUsuarios(id).subscribe(() => {
     this.router.navigate(['list']);
   });
 }
 
 /**
  * Método encargado de redireccionar
  */
 public crearProducto() {
   this.router.navigate(['create']);
 }

}
