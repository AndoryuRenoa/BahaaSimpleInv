import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { MenuComponent } from './menu/menu.component';
import { ReceivingComponent } from './receiving/receiving.component';
import { BarcodeReaderComponent } from './barcode-reader/barcode-reader.component';
import { VendorsComponent } from './vendors/vendors.component';

const appRoutes: Routes = [
  {path: 'mainmenu', component: MenuComponent},
  {path: '',   redirectTo: '/mainmenu', pathMatch: 'full' },
  {path: 'receiving', component: ReceivingComponent},
  {path: 'reader', component: BarcodeReaderComponent},
  {path: 'vendors', component: VendorsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    MenuComponent,
    ReceivingComponent,
    BarcodeReaderComponent,
    VendorsComponent
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
