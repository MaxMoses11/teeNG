import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./feature/layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', loadChildren: () => import('./feature/main/main.module').then(m => m.MainModule)},
      {path: 'order', loadChildren: () => import('./feature/order/order.module').then(m => m.OrderModule)},
      {path: 'catalog', loadChildren: () => import('./feature/catalog/catalog.module').then(m => m.CatalogModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
