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
    this.isButtonDisabled = true
    this.isIconHidden = false

    let iconKey = Object.keys(icons)
    const randomIconKey  = iconKey[Math.floor(Math.random()*iconKey.length)] as keyof typeof icons

    this.generatedIcon = icons[randomIconKey] as icons.IconDefinition

    setTimeout(() => {
      this.isButtonDisabled = false;
      this.isIconHidden = true;
    }, 3000)
  }
  
}
