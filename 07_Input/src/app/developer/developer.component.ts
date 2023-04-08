import { Component } from '@angular/core';
import { Developer } from '../models/developer';
import { SkillComponent } from '../skill/skill.component';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent {
  java: Skill = new Skill("Java", "https://logos-marques.com/wp-content/uploads/2021/03/Java-Embleme.png", "https://www.java.com/fr/")
  angular: Skill = new Skill("Angular", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/768px-Angular_full_color_logo.svg.png?20160527092314", "https://angular.io/")

  developer: Developer = new Developer("Doe", "John", 25, "male", "A mysterious man", [this.java, this.angular])
}
