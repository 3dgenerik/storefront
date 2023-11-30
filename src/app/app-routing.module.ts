import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products/products.component';
import { SigninComponent } from './users/signin/signin.component';
import { RegisterComponent } from './users/register/register.component';

const routes: Routes = [
    { path: '', component: ProductsComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'register', component: RegisterComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
