import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListHeadingComponent } from './list-heading.component';

describe('ListHeadingComponent', () => {
  let component: ListHeadingComponent;
  let fixture: ComponentFixture<ListHeadingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ ListHeadingComponent, IonicModule.forRoot() ] // Import the standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(ListHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
