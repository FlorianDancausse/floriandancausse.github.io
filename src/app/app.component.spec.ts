/** angular */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
/** end angular */

/** classes */
import { AppComponent } from './app.component';
import { routes } from './app.module.routing';
import { TestUtils } from './shared/tests/test-utils';
import { DetailledInfosModule } from './modules/detailled-infos/detailled-infos.module';
import { AppModule } from './app.module';
/** end classes */

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let testUtils: TestUtils<AppComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppModule,
        DetailledInfosModule,
        RouterTestingModule,
        RouterTestingModule.withRoutes(routes)
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    /** Init the ComponentFixture instance of AppComponent */
    fixture = TestBed.createComponent(AppComponent);

    /** Init a testUtils instance with the current fixture */
    testUtils = new TestUtils(fixture);

    /** Get the current fixture component */
    component = fixture.componentInstance;

    /** Get the current router */
    router = TestBed.inject(Router);

    /** Get the current location */
    location = TestBed.inject(Location);

    /** Performs the initial navigation */
    router.initialNavigation();

    /** Detect changes on the current fixture */
    fixture.detectChanges();
  });

  describe('Inititalization', () => {
    it('should create the app', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('View', () => {
    it('should show the app-main-infos', () => {
      expect(testUtils.getElement('app-main-infos')).toBeDefined();
      expect(testUtils.getElementAll('app-main-infos').length).toBe(1);
    });
  });
});
