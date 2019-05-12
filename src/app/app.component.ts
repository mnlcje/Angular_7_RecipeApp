import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipeApp';

  //By default load Recipe Component
  loadedFeature = 'recipe';
  
  onFeatureSelected(featureSel:string){
    this.loadedFeature = featureSel;
  }
}
