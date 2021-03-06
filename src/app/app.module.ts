import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HttpModule} from "@angular/http";
import {CustomerHomePage} from "../pages/customer-home/customer-home";
import {CustomerLoginPage} from "../pages/customer-login/customer-login";
import {OperatorHomePage} from "../pages/operator-home/operator-home";
import {OperatorLoginPage} from "../pages/operator-login/operator-login";
import { QRScanner } from '@ionic-native/qr-scanner';
import {QrPage} from "../pages/qr/qr";
import {TabsPage} from "../pages/operator-tabs/operator-tabs";
import {ScannedPage} from "../pages/scanned/scanned";
import {CustomerHomeTabsPage} from "../pages/customer-home-tabs/customer-home-tabs";
import {DatabaseStatsPage} from "../pages/database-stats/database-stats";
import {FilterPage} from "../pages/filter/filter";
import {MyLinks} from "../services/mylinks";
import {StatsPage} from "../pages/stats/stats";
import {CustomerCardPage} from "../pages/customer-card/customer-card";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CustomerHomePage,
    CustomerLoginPage,
    OperatorHomePage,
    OperatorLoginPage,
    QrPage,
    TabsPage,
    ScannedPage,
    CustomerHomeTabsPage,
    DatabaseStatsPage,
    FilterPage,
    StatsPage,
    CustomerCardPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CustomerHomePage,
    CustomerLoginPage,
    OperatorHomePage,
    OperatorLoginPage,
    QrPage,
    TabsPage,
    ScannedPage,
    CustomerHomeTabsPage,
    DatabaseStatsPage,
    FilterPage,
    StatsPage,
    CustomerCardPage
  ],
  providers: [
    StatusBar,
    QRScanner,
    SplashScreen,
    MyLinks,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
