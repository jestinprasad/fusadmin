import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { RouteGuardService } from './route-guard.service';

const routes: Routes = [
  {
     path: '',
      component: LoginComponent,
    data: {data: 'login'}
  },
  { path: 'register', component: RegisterComponent },
  { path: 'view', component: ViewComponent },
  { path: 'edit', component: EditComponent },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    // canLoad: [RouteGuardService]
  },
  {
    path: 'vendor',
    loadChildren: './vendor/vendor.module#VendorModule',
    // canLoad: [RouteGuardService]
  },
  {
    path: 'brand',
    loadChildren: './brand/brand.module#BrandModule',
    // canLoad: [RouteGuardService]
  },
  {
    path: 'store',
    loadChildren: './store/store.module#StoreModule',
    // canLoad: [RouteGuardService]
  },
  {
    path: 'attributes',
    loadChildren: './attributes/attributes.module#AttributesModule',
    // canLoad: [RouteGuardService]
  },
  {
    path: 'product',
    loadChildren: './product/product.module#ProductModule',
    // canLoad: [RouteGuardService]
  },
  {
    path: 'offer',
    loadChildren: './offer/offer.module#OfferModule',
    // canLoad: [RouteGuardService]
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule',
    // canLoad: [RouteGuardService]
  },
  {
    path: 'review',
    loadChildren: './review/review.module#ReviewModule',
    // canLoad: [RouteGuardService]
  },
  {
    path: 'feedback',
    loadChildren: './feedback/feedback.module#FeedbackModule',
    // canLoad: [RouteGuardService]
  },
  {
    path: 'customerRequest',
    loadChildren: './customer-request/customer-request.module#CustomerRequestModule',
    // canLoad: [RouteGuardService]
  },
  {
    path: 'redeem',
    loadChildren: './redeem/redeem.module#RedeemModule',
    // canLoad: [RouteGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
