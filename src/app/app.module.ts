import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second.component';
import { TwoComponent } from './components/two/two.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { TestNgStyleComponent } from './directives/test-ng-style/test-ng-style.component';
import { TestNgClassComponent } from './directives/test-ng-class/test-ng-class.component';
import { HighlightDirective } from './directives/highlight.directive';
import { Btc2usdPipe } from './pipes/btc2usd.pipe';
import { FiboComponent } from './fibo/fibo.component';
import { FiboPipe } from './pipes/fibo.pipe';
import { LoggerService } from './services/logger-service';
import { TestTemplateFormComponent } from './components/test-template-form/test-template-form.component';
import { BgDirective } from './bg.directive';
import { TestReactiveFormComponent } from './components/test-reactive-form/test-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    TwoComponent,
    PereComponent,
    FilsComponent,
    TestNgStyleComponent,
    TestNgClassComponent,
    HighlightDirective,
    Btc2usdPipe,
    FiboComponent,
    FiboPipe,
    TestTemplateFormComponent,
    BgDirective,
    TestReactiveFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule ,FormsModule],
  providers: [LoggerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
