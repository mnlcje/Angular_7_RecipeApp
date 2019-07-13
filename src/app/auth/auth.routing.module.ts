import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';

const route : Routes = [
{
    path:'auth', component:AuthComponent
}
];

@NgModule({
    imports:[RouterModule.forChild(route)],
    exports:[RouterModule]
})
export class AuthRoutingModule{

}