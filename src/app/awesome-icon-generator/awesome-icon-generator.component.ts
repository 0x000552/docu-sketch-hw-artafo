import { Component } from '@angular/core';
import * as icons from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-awesome-icon-generator',
  templateUrl: './awesome-icon-generator.component.html',
  styleUrls: ['./awesome-icon-generator.component.css']
})

export class AwesomeIconGeneratorComponent {
  generatedIcon = icons.fa0;
  isButtonDisabled = false;
  isIconHidden = true;

  generateIcon() {
   
  }
}
