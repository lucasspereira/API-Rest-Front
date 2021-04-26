import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';


const routes: Routes = [

  { path: '', redirectTo: 'cliente', pathMatch: 'full' },

  { path: 'cliente', component: ClienteComponent },
  { path: 'cliente/:id', component: ClienteComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }]
})
export class AppRoutingModule { }
