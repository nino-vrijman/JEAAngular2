import { Component } from '@angular/core';
import { TranslateService } from "ng2-translate";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private translate: TranslateService) {
    this.initializeTranslateService();
  }

  initializeTranslateService() {
    this.translate.addLangs(['en', 'nl']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
