import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { JaapsComponent } from './components/jaaps/jaaps.component';
import { RiesgosComponent } from './components/riesgos/riesgos.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { MenuComponent } from './components/menu/menu.component';
import { PadronusuariosComponent } from './components/padronusuarios/padronusuarios.component';
import { EsquemaComponent } from './components/esquema/esquema.component';
import { PlanojuntaComponent } from './components/planojunta/planojunta.component';
import { ReglamentoComponent } from './components/reglamento/reglamento.component';
import { MapaafectacionComponent } from './components/mapaafectacion/mapaafectacion.component';
import { MapaJaapComponent } from './components/mapajaap/mapajaap.component';
import { SensibilizacionunoComponent } from './components/sensibilizacionuno/sensibilizacionuno.component';
import { SensibilizaciondosComponent } from './components/sensibilizaciondos/sensibilizaciondos.component';
import { SensibilizaciontresComponent } from './components/sensibilizaciontres/sensibilizaciontres.component';
import { SensibilizacioncuatroComponent } from './components/sensibilizacioncuatro/sensibilizacioncuatro.component';
import { FooterComponent } from './components/footer/footer.component';
import { DocViewerComponent } from './doc-viewer/doc-viewer.component';
import { SensibilizacioncincoComponent } from './components/sensibilizacioncinco/sensibilizacioncinco.component';
import { SensibilizacionseisComponent } from './components/sensibilizacionseis/sensibilizacionseis.component';
import { EstatutoComponent } from './components/estatuto/estatuto.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AprobadosComponent } from './components/aprobados/aprobados.component';
import { PresentadoSinAprobacionComponent } from './components/presentado-sin-aprobacion/presentado-sin-aprobacion.component';
import { PorPresentarJaapComponent } from './components/por-presentar-jaap/por-presentar-jaap.component';
import { SensibilizacionsieteComponent } from './components/sensibilizacionsiete/sensibilizacionsiete.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PlanContingenciaComponent } from './components/plan-contingencia/plan-contingencia.component';
import { TourMatMenuModule } from 'ngx-ui-tour-md-menu';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JaapsComponent,
    RiesgosComponent,
    CursosComponent,
    MenuComponent,
    PadronusuariosComponent,
    EsquemaComponent,
    PlanojuntaComponent,
    ReglamentoComponent,
    MapaafectacionComponent,
    MapaJaapComponent,
    SensibilizacionunoComponent,
    SensibilizaciondosComponent,
    SensibilizaciontresComponent,
    SensibilizacioncuatroComponent,
    FooterComponent,
    DocViewerComponent,
    SensibilizacioncincoComponent,
    SensibilizacionseisComponent,
    EstatutoComponent,
    AprobadosComponent,
    PresentadoSinAprobacionComponent,
    PorPresentarJaapComponent,
    SensibilizacionsieteComponent,
    CarouselComponent,
    PlanContingenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDocViewerModule,
    NgbModule,
    InfiniteScrollModule,
    ScrollingModule,
    TourMatMenuModule.forRoot(),
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
