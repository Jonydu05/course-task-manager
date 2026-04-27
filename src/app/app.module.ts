import { DatePipe } from '@angular/common';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './shared/card/card.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { TaskComponent } from './tasks/task/task.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [RouterOutlet, DatePipe, ReactiveFormsModule, BrowserModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    CardComponent,
    TaskComponent,
    NewTaskComponent,
  ],
  bootstrap: [AppComponent],
  providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes)],
})
export class AppModule {}
