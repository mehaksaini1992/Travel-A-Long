import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { EnterInfoComponent } from './components/enter-info/enter-info.component';



const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'enter-info',
    component: EnterInfoComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EnterInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
