import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products/products.component';
import { SigninComponent } from './users/signin/signin.component';
import { RegisterComponent } from './users/register/register.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { GetAllUsersComponent } from './users/get-all-users/get-all-users.component';
import { CartsComponent } from './cart/carts/carts.component';

const routes: Routes = [
    { path: '', component: ProductsComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'product-details/:id', component: ProductDetailsComponent },
    { path: 'users', component: GetAllUsersComponent },
    { path: 'cart', component: CartsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
