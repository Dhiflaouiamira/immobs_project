import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetByEmailPage } from './get-by-email.page';

describe('GetByEmailPage', () => {
  let component: GetByEmailPage;
  let fixture: ComponentFixture<GetByEmailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GetByEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
