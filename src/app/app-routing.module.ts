import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from 'src/app/components/main/main.component';
import { LoginpageComponent } from 'src/app/components/loginpage/loginpage.component';
import { PagenotfoundComponent } from 'src/app/components/pagenotfound/pagenotfound.component';

const routes: Routes = [  { path: 'home',component: MainComponent },
{path: 'login', component: LoginpageComponent },
{ path: '',   redirectTo: '/login', pathMatch: 'full' },
{ path: '**', component: PagenotfoundComponent   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
