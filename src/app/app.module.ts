import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEditInspectionComponent } from './components/add-edit-inspection/add-edit-inspection.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InspectionAPIService } from './services/inspection-api.service';

@NgModule({
  declarations: [
    AppComponent,
    AddEditInspectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [InspectionAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
