import {BrowserModule} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MainPageComponent} from './main-page/main-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {GoogleLoginProvider, SocialLoginModule} from 'angularx-social-login';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { DashComponent } from './dash/dash.component';
import { PopupComponent } from './popup/popup.component';
import { CredLoginComponent } from './dash/cred-login/cred-login.component';

@NgModule({
  declarations: [

    AppComponent,
    LoginComponent,
    MainPageComponent,
    DashComponent,
    PopupComponent,
    CredLoginComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'login-google', component: DashComponent},
      {path: 'login-credentials', component: CredLoginComponent},
      {path: '**', component: MainPageComponent},
      
    ]),
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    SocialLoginModule,

    MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule,MatGridListModule,
    MatIconModule,
    CommonModule, MatToolbarModule, MatButtonModule, 
    MatIconModule,MatSelectModule,MatInputModule,
    FormsModule,MatFormFieldModule,MatDialogModule

    ,MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule,MatGridListModule,
      MatIconModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('148517665605-jspahbqleats6lvlag9kasc2c11b5g7o.apps.googleusercontent.com')
        }
      ]
    }
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
