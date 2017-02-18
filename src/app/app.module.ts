import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FilterExamplePage } from '../pages/filter-example/filter-example'
import {Http} from '@angular/http'
import { TranslateModule, TranslateStaticLoader, TranslateLoader} from 'ng2-translate/ng2-translate'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FilterExamplePage
  ],
  imports: [
    IonicModule.forRoot(MyApp), 
    TranslateModule.forRoot ({
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FilterExamplePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
export function createTranslateLoader(http: Http){
  return new TranslateStaticLoader(http, 'assets/i18n', '.json')
}
