import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { ReferenceDataComponent } from './views/reference-data/reference-data.component';
import { HeaderComponent } from './views/header/header.component';
import { DailyDataComponent } from './views/daily-data/daily-data.component';
import { StrategiesComponent } from './views/strategies/strategies.component';
const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
  },

  {
    path: 'referencedData',
    component: ReferenceDataComponent,
  }
  ,

  {
    path: 'dailyData',
    component: DailyDataComponent,
  }
  ,

  {
    path: 'strategies',
    component: StrategiesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
