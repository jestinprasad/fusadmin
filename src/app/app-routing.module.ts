import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'view', component: ViewComponent },
  { path: 'edit', component: EditComponent },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
  },
  {
    path: 'vendor',
    loadChildren: './vendor/vendor.module#VendorModule',
  },
  {
    path: 'brand',
    loadChildren: './brand/brand.module#BrandModule',
  },
  {
    path: 'store',
    loadChildren: './store/store.module#StoreModule',
  },
  {
    path: 'attributes',
    loadChildren: './attributes/attributes.module#AttributesModule',
  },
  {
    path: 'product',
    loadChildren: './product/product.module#ProductModule',
  },
  {
    path: 'offer',
    loadChildren: './offer/offer.module#OfferModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
