import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOfProjectToSponsorComponent } from './detail-of-project-to-sponsor.component';

describe('DetailOfProjectToSponsorComponent', () => {
  let component: DetailOfProjectToSponsorComponent;
  let fixture: ComponentFixture<DetailOfProjectToSponsorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailOfProjectToSponsorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailOfProjectToSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
