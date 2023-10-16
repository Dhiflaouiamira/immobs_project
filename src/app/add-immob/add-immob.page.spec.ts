import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddImmobPage } from './add-immob.page';

describe('AddImmobPage', () => {
  let component: AddImmobPage;
  let fixture: ComponentFixture<AddImmobPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddImmobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
