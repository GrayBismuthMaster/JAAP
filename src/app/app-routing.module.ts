import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JaapsComponent } from './components/jaaps/jaaps.component';
import { PadronusuariosComponent } from './components/padronusuarios/padronusuarios.component';
//import { EsquemaComponent } from './components/esquema/esquema.component';
import { PlanojuntaComponent } from './components/planojunta/planojunta.component';
import { ReglamentoComponent } from './components/reglamento/reglamento.component';
import { MapaafectacionComponent } from './components/mapaafectacion/mapaafectacion.component';
import { MapaJaapComponent } from './components/mapajaap/mapajaap.component';
import { SensibilizaciondosComponent } from './components/sensibilizaciondos/sensibilizaciondos.component';
import { SensibilizacionunoComponent } from './components/sensibilizacionuno/sensibilizacionuno.component';
import { SensibilizaciontresComponent } from './components/sensibilizaciontres/sensibilizaciontres.component';
import { SensibilizacioncuatroComponent } from './components/sensibilizacioncuatro/sensibilizacioncuatro.component';
import { SensibilizacioncincoComponent } from './components/sensibilizacioncinco/sensibilizacioncinco.component';
import { SensibilizacionseisComponent } from './components/sensibilizacionseis/sensibilizacionseis.component';
import { EstatutoComponent } from './components/estatuto/estatuto.component';
import { AprobadosComponent } from './components/aprobados/aprobados.component';
import { PresentadoSinAprobacionComponent } from './components/presentado-sin-aprobacion/presentado-sin-aprobacion.component';
import { PorPresentarJaapComponent } from './components/por-presentar-jaap/por-presentar-jaap.component';
import { SensibilizacionsieteComponent } from './components/sensibilizacionsiete/sensibilizacionsiete.component';
import { EsquemaComponent } from './components/esquema/esquema.component';
import { PlanContingenciaComponent } from './components/plan-contingencia/plan-contingencia.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'presentado-sin-aprobacion', component: PresentadoSinAprobacionComponent },
  { path: 'por-presentar-jaap', component: PorPresentarJaapComponent },
  { path: 'aprobados', component: AprobadosComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'jaap', component: JaapsComponent},
  { path: 'padron', component: PadronusuariosComponent},
  { path: 'esquema', component: EsquemaComponent},
  { path: 'planojunta', component: PlanojuntaComponent},
  { path: 'reglamento', component: ReglamentoComponent},
  { path: 'plancontingencia', component: PlanContingenciaComponent},
  { path: 'mapaafeccion', component: MapaafectacionComponent},
  { path: 'mapajaap', component: MapaJaapComponent},
  { path: 'sensibilizacionuno', component: SensibilizacionunoComponent},
  { path: 'sensibilizaciondos', component: SensibilizaciondosComponent},
  { path: 'sensibilizaciontres', component: SensibilizaciontresComponent},
  { path: 'sensibilizacioncuatro', component: SensibilizacioncuatroComponent},
  { path: 'sensibilizacioncinco', component: SensibilizacioncincoComponent},
  { path: 'sensibilizacionseis', component: SensibilizacionseisComponent},
  { path: 'sensibilizacionsiete', component: SensibilizacionsieteComponent},
  { path: 'estatuto', component: EstatutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, initialNavigation: 'enabledNonBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
