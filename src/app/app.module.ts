import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from './products/products/products.component';
import { ProductComponent } from './products/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuantityComboComponent } from './layout/quantity-combo/quantity-combo.component';
import { ProductsFilterComponent } from './layout/products-filter/products-filter.component';
import { CapitalizePipe } from './pipes/CapitalizePipe';
import { NavBarComponent } from './navigation/nav-bar/nav-bar.component';
import { SigninComponent } from './users/signin/signin.component';
import { RegisterComponent } from './users/register/register.component';
import { SigninRegisterNavigationComponent } from './users/signin-register-navigation/signin-register-navigation.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductsComponent,
        ProductComponent,
        QuantityComboComponent,
        ProductsFilterComponent,
        CapitalizePipe,
        NavBarComponent,
        SigninComponent,
        RegisterComponent,
        SigninRegisterNavigationComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule, HttpClientModule, ReactiveFormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
