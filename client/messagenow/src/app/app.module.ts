import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatCardModule,
    MatInputModule,
    MatListModule,
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
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import { CreateMessageComponent } from './components/createmessage/createmessage.component';
import {MnSocket} from './services/mnsocket.service';
import {SocketDataProviderService} from './services/socketdataprovider.service';

const socketConfig: SocketIoConfig = { url: 'localhost:3000', options: {} };

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
        SocketIoModule.forRoot(socketConfig)
        // SocketIoModule
    ],
  providers: [MemoryDataProvider, SocketDataProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
