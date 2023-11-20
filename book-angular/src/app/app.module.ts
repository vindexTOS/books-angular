import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { StoreModule } from '@ngrx/store'
import { MainViewAPIComponent } from './main-api-host/components/main-view/main-view.component'
import { NavbarComponent } from './general-components/navbar/navbar.component'
import { ErrorComponent } from './general-components/error/error.component'
import { SuccsessComponent } from './general-components/succsess/succsess.component'
import { LoadingComponent } from './general-components/loading/loading.component'
import { StatusReducer } from './Store/StatusHanndle/Status.reducer'
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common'
import { MainViewLocalComponent } from './main-local-host/components/main-view/main-view.component'
import { BookCardComponent } from './main-local-host/components/book-card/book-card.component'

import { RouterModule } from '@angular/router'
import { SingleBookComponent } from './main-local-host/components/single-book/single-book.component'
@NgModule({
  declarations: [
    AppComponent,
    MainViewAPIComponent,
    MainViewLocalComponent,
    NavbarComponent,
    ErrorComponent,
    SuccsessComponent,
    LoadingComponent,
    BookCardComponent,
    SingleBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    StoreModule.forRoot({
      statusselector: StatusReducer,
    }),
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
