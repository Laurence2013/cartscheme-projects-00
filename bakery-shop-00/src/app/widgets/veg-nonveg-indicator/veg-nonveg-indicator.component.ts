import { Component, OnInit, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-veg-nonveg-indicator',
  templateUrl: './veg-nonveg-indicator.component.html',
  styleUrls: ['./veg-nonveg-indicator.component.scss'],
  imports : [NgClass]
})
export class VegNonvegIndicatorComponent implements OnInit {

  public type = input<string>('veg');
  public constructor(){}
  public ngOnInit(){}
}
