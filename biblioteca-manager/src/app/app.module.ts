import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LivroListComponent } from './livros/livro-list.component';
import { Error404Component } from './error-404/error-404.component';
import { LivroModule } from './livros/livro.module';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    LivroModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'livros', pathMatch: 'full'
      },
      {
        path: 'livros', component: LivroListComponent
      },
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
