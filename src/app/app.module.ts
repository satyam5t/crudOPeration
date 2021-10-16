import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import { EditComponent } from './Form/edit/edit.component';
import { DeleteComponent } from './Form/delete/delete.component';
import { SaveComponent } from './Form/save/save.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon'
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    EditComponent,
    DeleteComponent,
    SaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatCardModule,MatTableModule,MatInputModule,MatButtonModule,FormsModule,ReactiveFormsModule,HttpClientModule,MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
