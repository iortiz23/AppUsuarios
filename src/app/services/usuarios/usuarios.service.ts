import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from 'src/app/models/usuarios';
import { Observable } from 'rxjs';
const url ="https://localhost:44312/api/Usuarios/";
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  public postUsuarios(usuarios: Usuarios): Observable<Usuarios>{
    return this.http.post<Usuarios>(url,usuarios);
  }
  public getUsuarios(): Observable<Usuarios>{
    return this.http.get<Usuarios>(url);
  }
  public putUsuarios(usuarios: Usuarios): Observable<Usuarios>{
    return this.http.put<Usuarios>(url,usuarios);
  }
  public deleteUsuarios(id:number): Observable<Usuarios>{
    const newUrl = url +id;
    return this.http.delete<Usuarios>(newUrl);
  }
}
