import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsToSponsorComponent } from './projects-to-sponsor.component';

describe('ProjectsToSponsorComponent', () => {
  let component: ProjectsToSponsorComponent;
  let fixture: ComponentFixture<ProjectsToSponsorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsToSponsorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsToSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
