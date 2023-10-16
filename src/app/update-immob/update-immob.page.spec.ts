import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateImmobPage } from './update-immob.page';

describe('UpdateImmobPage', () => {
  let component: UpdateImmobPage;
  let fixture: ComponentFixture<UpdateImmobPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateImmobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
