import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOfProjectComponent } from './detail-of-project.component';

describe('DetailOfProjectComponent', () => {
  let component: DetailOfProjectComponent;
  let fixture: ComponentFixture<DetailOfProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailOfProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailOfProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
