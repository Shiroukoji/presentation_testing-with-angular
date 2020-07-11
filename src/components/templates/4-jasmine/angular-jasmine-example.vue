<template>
    <pre><code data-trim data-noescape :data-line-numbers="lines">
        describe('MainComponent', () => {
            let component: MainComponent;
            let fixture: ComponentFixture MainComponent;

            beforeEach(async(() => {
                TestBed.configureTestingModule({
                declarations: [ MainComponent ]
            })
            .compileComponents();
            }));

            beforeEach(() => {
                fixture = TestBed.createComponent(MainComponent);
                component = fixture.componentInstance;
                fixture.detectChanges();
            });

            it('should create', () => {
                expect(component).toBeTruthy();
            });
        });
    </code></pre>
</template>

<script>
    export default {
        name: 'JasmineAngularExample',
        props: {
            lines: String
        }
    }
</script>