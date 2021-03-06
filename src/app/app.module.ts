import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';

import  {RouterModule} from '@angular/router'
import { ROUTERS, AuthGuard } from './app.router';
import { TopoComponent } from './home/topo/topo.component';
import { RodapeComponent } from './home/rodape/rodape.component';
import { CaminhaoComponent } from './caminhao/caminhao.component';

import { TextMaskModule } from 'angular2-text-mask';
import { ViajemComponent } from './viajem/viajem.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TopoComponent,
    RodapeComponent,
    CaminhaoComponent,
    ViajemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTERS),
    TextMaskModule,
    AngularFontAwesomeModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
