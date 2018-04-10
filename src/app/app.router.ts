import { LoginComponent } from "./login/login.component";
import { Routes, CanActivate } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AuthService } from "./services/auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate{
    
    constructor(private auth: AuthService){

    }

    public canActivate(): boolean{
        return this.auth.autenticado();
    }
}

export const ROUTERS: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: HomeComponent, canActivate:[AuthGuard]}
]

