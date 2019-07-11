import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RestApiService } from './rest-api.service';
import { MessageComponent } from './message/message.component';
import { DataService } from './data.service';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { AddressComponent } from './address/address.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { AppRoutingModule } from './app-routing.module';
import { PostProductComponent } from './post-product/post-product.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessageComponent,
    RegistrationComponent,
    LoginComponent,
    ProfileComponent,
    SettingsComponent,
    AddressComponent,
    BsNavbarComponent,
    CategoriesComponent,
    PostProductComponent,
    MyProductsComponent,
    CategoryComponent,
    ProductComponent,
    SearchComponent,
    CartComponent,
    MyOrdersComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
            RestApiService,
            DataService,
            AuthGuardService     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
