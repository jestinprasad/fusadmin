import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
// tslint:disable-next-line:max-line-length
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatInputModule, MatListModule, MatCardModule } from '@angular/material';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { InterceptorService } from './interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { StorageService } from './storage.service';



@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    RegisterComponent,
    ViewComponent,
    EditComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [ApiService, StorageService, InterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
