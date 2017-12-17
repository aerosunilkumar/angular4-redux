import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaPartyAppModuleComponent } from './pizza-party-app-module.component';

describe('PizzaPartyAppModuleComponent', () => {
  let component: PizzaPartyAppModuleComponent;
  let fixture: ComponentFixture<PizzaPartyAppModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaPartyAppModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaPartyAppModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
