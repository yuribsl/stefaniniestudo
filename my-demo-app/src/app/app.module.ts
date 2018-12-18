import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './service/product.service';
import { ProductListComponent } from './components/product/list/index.component';
import { AddProductComponent } from './components/product/add/add.component';
import { EditProductComponent } from './components/product/edit/edit.component';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
