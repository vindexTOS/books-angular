import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { StoreModule } from '@ngrx/store'
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
import { LocalStorageReducer } from './Store/LocalStorage/Local.reducer'
import { DialogComponent } from './general-components/dialog/dialog.component'
import { TopBarComponent } from './main-local-host/components/top-bar/top-bar.component'
import { AddBookComponent } from './main-local-host/components/add-book/add-book.component'
import { FormsModule } from '@angular/forms'
import { SingleBookApiComponent } from './main-api-host/components/single-book-api/single-book-api.component'
import { BookCardApiComponent } from './main-api-host/components/book-card-api/book-card-api.component'
import { TopBarApiComponent } from './main-api-host/components/top-bar-api/top-bar-api.component'
import { AddBookApiComponent } from './main-api-host/components/add-book-api/add-book-api.component'
import { EffectsModule } from '@ngrx/effects'
import { ApiReducer } from './Store/ApiHanndle/Api.reducer'
import { APIEffect } from './Store/ApiHanndle/Api.effect'
import { MainViewAPIComponent } from './main-api-host/components/main-view-api/main-view-api.component'
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
    DialogComponent,
    TopBarComponent,
    AddBookComponent,
    SingleBookApiComponent,
    BookCardApiComponent,
    TopBarApiComponent,
    AddBookApiComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    StoreModule.forRoot({
      statusselector: StatusReducer,
      localstorageselector: LocalStorageReducer,
      apidataselector: ApiReducer,
    }),
    HttpClientModule,
    CommonModule,
    EffectsModule.forRoot([APIEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
