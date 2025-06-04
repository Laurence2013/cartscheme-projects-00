import { Component, OnInit, input } from '@angular/core';

import { IonItemDivider, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-list-heading',
  templateUrl: './list-heading.component.html',
  styleUrls: ['./list-heading.component.scss'],
  imports: [IonItemDivider, IonButton],
})
export class ListHeadingComponent implements OnInit {

  public heading = input<string>('');
  public buttonTitle = input<string>('See All');

  public constructor(){}
  public ngOnInit(){}
}
