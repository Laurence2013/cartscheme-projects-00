import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';

import { IonCol } from '@ionic/angular/standalone';

import { Category } from 'src/app/interfaces/category.interface';
import { ImageCircleComponent } from 'src/app/widgets/image-circle/image-circle.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  imports: [IonCol, ImageCircleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CategoriesComponent  implements OnInit {

  public categories = input<Category[]>([]);

  public constructor(){}
  public ngOnInit(){}
}
