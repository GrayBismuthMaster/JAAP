import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private _router: Router) {
  }

 ngOnInit(): void {
   document.getElementById("btn_open").addEventListener("click", open_menu);
   document.getElementById("btn_close").addEventListener("click", close_menu); 

   /* Getting the elements by their id. */
   var menu_movil = document.getElementById("menu_movil");

   function open_menu(){
     menu_movil.classList.add("menu__responsive_block--show");
   }
   function close_menu(){
     menu_movil.classList.remove("menu__responsive_block--show");
   }
   
 }


 /**
  * "When the user clicks on a link in the menu, the menu closes and the user is redirected to the
  * page they clicked on."
  * </code>
  * @param {any} pagina - any
  */
 recargar(pagina: any){  
   var menu_movil = document.getElementById("menu_movil");
   menu_movil.classList.remove("menu__responsive_block--show");
   this._router.navigate(['/' + pagina]);
 }

 menu(){
   document.getElementById("btn_open").addEventListener("click", open_menu);
   document.getElementById("btn_close").addEventListener("click", close_menu); 
   /* Getting the elements by their id. */
   var menu_movil = document.getElementById("menu_movil");

   // document.getElementById("open_search").addEventListener("click", search);
   document.getElementById("open_nosotros").addEventListener("click", open_nosotros);
   document.getElementById("open_sensi").addEventListener("click", open_sensi);

  /* Getting the elements by their id. */
   var menu_movil = document.getElementById("menu_movil");
   var nostros = document.getElementById("nosotros");

   function open_menu(){
     menu_movil.classList.add("menu__responsive_block--show");
   }
   function close_menu(){
     menu_movil.classList.remove("menu__responsive_block--show");
   }
   function open_nosotros(){
    nostros.classList.toggle("submenu--show");
  }

  function open_sensi(){
    nostros.classList.toggle("submenusensibilazacion--show");
  }
  
 }

  menuNosotros(){
    var nostros = document.getElementById("nosotros");
    nostros.classList.toggle("submenu--show");
  }
  menuGestionRiesgos(){
    var nostros = document.getElementById("gestion_riesgos");
    nostros.classList.toggle("submenu--show");
  }

  menuSensibilizacion(){
    var nostros = document.getElementById("sensi");
    nostros.classList.toggle("submenusensibilazacion--show");
  }

}
