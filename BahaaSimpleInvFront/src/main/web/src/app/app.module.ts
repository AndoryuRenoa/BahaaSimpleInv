import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { MenuComponent } from './menu/menu.component';
import { ReceivingComponent } from './receiving/receiving.component';

const appRoutes: Routes = [
  {path: 'mainmenu', component: MenuComponent},
  {path: '',   redirectTo: '/mainmenu', pathMatch: 'full' },
  {path: 'reader', component: ReceivingComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    MenuComponent,
    ReceivingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
