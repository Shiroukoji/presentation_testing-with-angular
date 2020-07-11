import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
import { HeroService } from '../hero.service';
import { DebugElement } from '@angular/core';
import { Hero } from '../hero';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let debugElement: DebugElement;
  let heroService: HeroService
  let heroSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],
      providers: [ HeroService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    debugElement = fixture.debugElement;

    heroService = debugElement.injector.get(HeroService);
    heroSpy = spyOn(heroService, 'getHeroes').and.callThrough();

  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should ask Heros', () => {
    component.ngOnInit();
    expect(heroSpy).toHaveBeenCalled();
  });

  it('should set the hero correctly', () => {
    const hero: Hero = { id: 17, name: 'Dynama' };
    component.onSelect(hero);
    expect(component.selectedHero).toEqual(hero);
  });

});
