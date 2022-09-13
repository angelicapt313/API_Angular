import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEditInspectionComponent } from './inspection/add-edit-inspection/add-edit-inspection.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InspectionAPIService } from './services/inspection-api.service';
import { ShowInspectionComponent } from './inspection/show-inspection/show-inspection.component';
import { InspectionComponent } from './inspection/inspection.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEditInspectionComponent,
    ShowInspectionComponent,
    InspectionComponent
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
