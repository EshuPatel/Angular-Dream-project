import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { FruitsComponent } from './fruits/fruits.component';
import { PipesdemoComponent } from './pipesdemo/pipesdemo.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutusComponent } from './aboutus/aboutus.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'emp', component:EmployeeComponent},
    {path: 'favs', component:FruitsComponent},
    {path: 'pipes', component: PipesdemoComponent},
    {path: 'login', component: LoginComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'det', component: DetailsComponent},
    {path: 'aboutus', component: AboutusComponent},
    {path: '**', component: NotfoundComponent}


];
