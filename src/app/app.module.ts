/* imports from node_modules */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/panel';
/* imports from app */
import { AppComponent } from './app.component';
import { QuaesitorComponent } from './quaesitor/quaesitor.component';
/* module */
@NgModule({
	bootstrap: [
		AppComponent
	],
	declarations: [
		AppComponent,
		QuaesitorComponent
	],
	imports: [
		BrowserAnimationsModule,
		BrowserModule,
		ButtonModule,
		FormsModule,
		HttpClientModule,
		InputTextareaModule,
		LoadingBarHttpClientModule,
		PanelModule
	],
	providers: []
})
export class AppModule {}
