import { Component, OnInit } from '@angular/core';
import { TourService } from "ngx-ui-tour-md-menu";
@Component({
  selector: 'app-mapaafectacion',
  templateUrl: './mapaafectacion.component.html',
  styleUrls: ['./mapaafectacion.component.css'],

})
export class MapaafectacionComponent implements OnInit {

  constructor(private readonly tourService: TourService) { }

  private mutationObserver: MutationObserver;

  ngOnInit(): void {
    this.createMutationObserver();

    this.tourService.initialize([
      {
        anchorId: "titulo",
        content:
          "Bienvenido a la gestión de riesgos, para continuar de click en next o en siguiente",
        title: "Bienvenido",
        route: "mapaafeccion#titulo"
      },
      {
        anchorId: 'sidebar_mapa', // Unique anchor ID for this tooltip
        content: 'Para continuar despliegue las opciones del mapa', // Tooltip content
        title: 'Despliegue de mapa',
        route: 'mapaafeccion#titulos', // Route where this tooltip should be displayed
       },
      {
        anchorId: "sidebar_sitios_seguros",
        content:
          "Dé click en la casilla para desplegar los sitios seguros",
        title: "Sitios Seguros",
        route: "mapaafeccion#sidebar_sitios_seguros"
      },
      {
        anchorId: "sidebar_display_sitios_seguros",
        content:
          "Aquí puede visualizar los sitios seguros del mapa, da click en algún marcador",
        title: "Sitios Seguros",
        route: "mapaafeccion#sidebar_display_sitios_seguros"
      },

    ]);

    this.tourService.start();
    /*
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    */
  }

  private createMutationObserver() {
    this.mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation: any) => {
        if (mutation.target.classList.contains('cdk-overlay-connected-position-bounding-box')) {
          // This element has been added to the DOM
          this.modifyElementAttributes(mutation.target);
        }
          //CONTENEDOR BACKGROUND
          let contenedorBackground:any = document.querySelector("#contenedor_background")
          contenedorBackground.style.backgroundColor='rgba(0, 0, 0, 0.7)';
        //anchorIds.forEach((anchorId) => {
          let tooltip:any = document.querySelector("#mat-menu-panel-0")

          if(this.tourService.currentStep && tooltip){
            tooltip.style.position = 'absolute';
            tooltip.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            tooltip.style.transition = 'transition: top 0.3s ease, left 0.3s ease;' /* Add the transition properties */
            tooltip.style.zIndex = '1';
            const divObjective: HTMLElement | null = document.querySelector(`#${this.tourService.currentStep.anchorId}`);
            console.log("step"+this.tourService.currentStep.anchorId);
            console.log("Divobjective", divObjective.title)
            if (divObjective && tooltip) {
              // Get the position of the div
              const divRect = divObjective.getBoundingClientRect();

              // Calculate the desired position for the tooltip
              const tooltipTop = divRect.bottom + window.scrollY; // Position it below the div
              const tooltipLeft = divRect.left + window.scrollX; // Position it at the left edge of the div

              divObjective.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';

              // Set the tooltip's position
              // Set the tooltip's position with a slight delay to trigger the transition

              //setTimeout(() => {
                tooltip.style.top = `${tooltipTop}px`;
                tooltip.style.left = `${tooltipLeft}px`;
              //}, 10);

            }
          }else{
            console.log("GInal")
            let mapContainer:any = document.querySelector(".mapa__contenedor")
            mapContainer.style.zIndex = "1";
            console.log(mapContainer)
            contenedorBackground.style.backgroundColor='transparent';
          }


        //});
      });
    });

    // Start observing the DOM for changes
    this.mutationObserver.observe(document.body, {
      childList: true, // Watch for child elements being added or removed
      subtree: true, // Watch all descendants of the body
    });
  }



  private modifyElementAttributes(element: HTMLElement) {
    // Modify the attributes or styles of the element as needed
    element.style.position = 'absolute';
  }

  ngOnDestroy(): void {
    // Disconnect the MutationObserver when your component is destroyed
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
  }
}
