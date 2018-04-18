import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecordsComponent } from './records/records.component';
import { UpdateRecordsComponent } from './update-records/update-records.component';
import {RecordsService} from './records.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecordsComponent,
    UpdateRecordsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:"", component: HomeComponent},
      {path:"records", component: RecordsComponent},
      {path:"UpdateRecords/:id", component: UpdateRecordsComponent}
    ])
  ],
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
