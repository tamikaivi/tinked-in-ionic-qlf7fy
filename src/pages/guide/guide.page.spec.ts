import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {GuidePage} from './guide.page';

describe('Tab1Page', () => {
    let component: GuidePage;
    let fixture: ComponentFixture<GuidePage>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [GuidePage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(GuidePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
