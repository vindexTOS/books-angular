import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MainViewAPIComponent } from './main-api-host/components/main-view-api/main-view-api.component'
import { MainViewLocalComponent } from './main-local-host/components/main-view/main-view.component'
import { SingleBookComponent } from './main-local-host/components/single-book/single-book.component'
import { SingleBookApiComponent } from './main-api-host/components/single-book-api/single-book-api.component'
const routes: Routes = [
  {
    path: '',
    component: MainViewLocalComponent,
  },
  {
    path: 'book/:id',
    component: SingleBookComponent,
  },
  {
    path: 'api',
    component: MainViewAPIComponent,
  },
  {
    path: 'api-book/:id',
    component: SingleBookApiComponent,
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
