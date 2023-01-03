import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestuarantlistComponent } from './restuarantlist/restuarantlist.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewRestuarantComponent } from './view-restuarant/view-restuarant.component';
import { AddRestuarantComponent } from './add-restuarant/add-restuarant.component';
import { FormsModule } from '@angular/forms';
import { UpdateRestuarantComponent } from './update-restuarant/update-restuarant.component';
import { DeleteRestuarantComponent } from './delete-restuarant/delete-restuarant.component';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RestuarantlistComponent,
    HeaderComponent,
    FooterComponent,
    ViewRestuarantComponent,
    AddRestuarantComponent,
    UpdateRestuarantComponent,
    DeleteRestuarantComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
