import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AddNumbersComponent } from './add-numbers/add-numbers.component';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './capitalize.pipe';
import { SalutationPipe } from './salutation.pipe';
import { SicalculatorComponent } from './sicalculator/sicalculator.component';
import { MenuComponent } from './menu/menu.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import { NgxEditorModule } from 'ngx-editor';
import { HttpClientModule } from '@angular/common/http';
import { menu, placeholder, schema } from 'ngx-editor';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

let firebaseConfig = {
  apiKey: "AIzaSyCVIjLmTGnyQ2lXvwwj1LJ1B0CdhB7wxrs",
  authDomain: "scribe-68fa4.firebaseapp.com",
  databaseURL: "https://scribe-68fa4.firebaseio.com",
  projectId: "scribe-68fa4",
  storageBucket: "scribe-68fa4.appspot.com",
  messagingSenderId: "203552416215",
  appId: "1:203552416215:web:df73ffb9fba6d9f84deb92",
  measurementId: "G-FPT5Q18T21"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    AddNumbersComponent,
    HomeComponent,
    CapitalizePipe,
    SalutationPipe,
    SicalculatorComponent,
    MenuComponent,
    MyblogsComponent,
    ProfileComponent,
    CreateComponent,
    PostComponent,
    ViewComponent,
    CommentsComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    HttpClientModule,NgxEditorModule.forRoot({
      schema, // optional scheama, see https://sibiraj.dev/ngx-editor/additional-documentation/schema.html
      plugins: [
        menu({
          // default options (Optional)
          toolbar: [
            ['bold', 'italic', 'code'], // inline icons
            ['ordered_list', 'bullet_list'],
            [{ 'heading': ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }] // dropdown
          ],
          labels: {
            bold: 'Bold',
            italics: 'Italics',
            code: 'Code',
            ordered_list: 'Ordered List',
            bullet_list: 'Bullet List',
            heading: 'Heading'
          }
        }),
        placeholder('Type something here...')
      ],
      nodeViews: {} // optional, see https://prosemirror.net/examples/footnote/
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
