import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrevisaotempoComponent } from './components/previsaotempo/previsaotempo.component';

const routes: Routes = [
    {path:"", component: PrevisaotempoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
