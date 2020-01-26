import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatListModule, MatProgressBarModule, MatSlideToggleModule, MatToolbarModule} from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ChatComponent } from './components/chat/chat.component';
import { SelectgroupComponent } from './components/selectgroup/selectgroup.component';
import { MessageComponent } from './components/message/message.component';
import {MemoryDataProvider} from './services/memorydataprovider.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent,
    SelectgroupComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatListModule,
    MatCardModule,
    MatSlideToggleModule,
    MatToolbarModule,
  ],
  providers: [MemoryDataProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
