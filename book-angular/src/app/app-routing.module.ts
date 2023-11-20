import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MainViewAPIComponent } from './main-api-host/components/main-view/main-view.component'
import { MainViewLocalComponent } from './main-local-host/components/main-view/main-view.component'
import { SingleBookComponent } from './main-local-host/components/single-book/single-book.component'
const routes: Routes = [
  {
    path: '',
    component: MainViewLocalComponent,
  },
  {
    path: 'book/:id',
    component: SingleBookComponent,
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
