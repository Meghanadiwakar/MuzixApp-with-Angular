import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { MuzixService } from './muzix.service';
// import {MatButtonModule} from '@angular/material/button';
import { CardComponent } from './card/card.component';
import {MatMenuModule} from '@angular/material/menu'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';

import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatToolbarModule} from '@angular/material/toolbar';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistcardComponent } from './wishlistcard/wishlistcard.component';
import { UpdateComponent } from './update/update.component'; 


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CardComponent,
    WishlistComponent,
    WishlistcardComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatInputModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  providers: [MuzixService],
  bootstrap: [AppComponent]
})
export class AppModule { }
