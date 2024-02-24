import { Routes } from "@angular/router";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { LogInComponent } from "./log-in/log-in.component";

export const routes: Routes = [
  // Define your routes here
  { path: '', component: LogInComponent },
  { path: 'signup', component: SignUpComponent }
];
