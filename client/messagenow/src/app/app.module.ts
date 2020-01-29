import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule,
  MatProgressBarModule,
  MatSlideToggleModule,
  MatToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ChatComponent } from './components/chat/chat.component';
import { SelectgroupComponent } from './components/selectgroup/selectgroup.component';
import { MessageComponent } from './components/message/message.component';
import {MemoryDataProvider} from './services/memorydataprovider.service';
import { CreateMessageComponent } from './components/createmessage/createmessage.component';
import {SocketDataProviderService} from './services/socketdataprovider.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent,
    SelectgroupComponent,
    MessageComponent,
    CreateMessageComponent
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
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [MemoryDataProvider, SocketDataProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
