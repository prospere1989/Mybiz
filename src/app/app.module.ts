import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import {HomePageModule} from '../pages/home/home.module';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PublierPageModule } from '../pages/publier/publier.module'
import {LoginPageModule}from '../pages/login/login.module'
import { UserInfosProvider } from '../providers/user-infos/user-infos';
@NgModule({
  declarations: [
    MyApp,
    ListPage
  ],
  imports: [
    PublierPageModule,
    HomePageModule,
    LoginPageModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserInfosProvider
  ]
})
export class AppModule {}
