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
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { QuantityService } from './products/services/quantity.service';
import { NavBarWrapperComponent } from './navigation/nav-bar-wrapper/nav-bar-wrapper.component';
import { ToNumberPipe } from './pipes/toNumber';
import { InfoComponent } from './layout/info/info.component';
import { GetAllUsersComponent } from './users/get-all-users/get-all-users.component';
import { UserComponent } from './users/user/user.component';
import { BackToProductComponent } from './layout/back-to-product/back-to-product.component';
import { CartsComponent } from './cart/carts/carts.component';
import { CartComponent } from './cart/cart/cart.component';
import { MenuComponent } from './navigation/menu/menu.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import { DateFormatDirective } from './directives/date-format.directive';
import { SuccessComponent } from './success/success/success.component'


@NgModule({
    declarations: [
        AppComponent,
        ProductsComponent,
        ProductComponent,
        QuantityComboComponent,
        ProductsFilterComponent,
        CapitalizePipe,
        ToNumberPipe,
        NavBarComponent,
        SigninComponent,
        RegisterComponent,
        SigninRegisterNavigationComponent,
        ProductDetailsComponent,
        NavBarWrapperComponent,
        InfoComponent,
        GetAllUsersComponent,
        UserComponent,
        BackToProductComponent,
        CartsComponent,
        CartComponent,
        MenuComponent,
        DateFormatDirective,
        SuccessComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule, HttpClientModule, ReactiveFormsModule, MatSlideToggleModule, MatIconModule],
    providers: [QuantityService],
    bootstrap: [AppComponent],
})
export class AppModule {}
