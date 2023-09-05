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
        anchorId: "me_redirijo",
        content:
          "This is a step from the eager loaded app module in the home component",
        title: "Home Component",
        route: "mapaafeccion#me_redirijo"
      },
      {
        anchorId: 'titulos', // Unique anchor ID for this tooltip
        content: 'This is a tooltip for #titulos', // Tooltip content
        title: 'Tooltip Title',
        route: 'mapaafeccion#titulos', // Route where this tooltip should be displayed
       },
      {
        anchorId: "app-mapaafectacion",
        content:
          "ThiSecond step",
        title: "Homsd",
        route: "mapaafeccion#app-mapaafectacion"
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

        //anchorIds.forEach((anchorId) => {
          let tooltip:any = document.querySelector("#mat-menu-panel-0")
          tooltip.style.position = 'absolute';
          tooltip.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
          tooltip.style.transition = 'transition: top 0.3s ease, left 0.3s ease;' /* Add the transition properties */
         
          if(this.tourService.currentStep && tooltip){
            const divObjective: HTMLElement | null = document.querySelector(`#${this.tourService.currentStep.anchorId}`);
            console.log("divobjective"+divObjective.textContent)
            console.log("step"+this.tourService.currentStep.anchorId);
            if (divObjective && tooltip) {
              // Get the position of the div
              const divRect = divObjective.getBoundingClientRect();

              // Calculate the desired position for the tooltip
              const tooltipTop = divRect.bottom + window.scrollY; // Position it below the div
              const tooltipLeft = divRect.left + window.scrollX; // Position it at the left edge of the div

              // Set the tooltip's position
              // Set the tooltip's position with a slight delay to trigger the transition
              setTimeout(() => {
                tooltip.style.top = `${tooltipTop}px`;
                tooltip.style.left = `${tooltipLeft}px`;
              }, 100);
            }
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
