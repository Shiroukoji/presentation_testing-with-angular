<template>
    <section>
        <section>
            <img src="../../../assets/icons/components.svg" height="100px">
            <br>
            Komponenten in Angular testen
        </section>
        <section>
            <b>Jasmine mit Angular</b>
        </section>
        <section>
            <b>Jasmine mit Angular</b>
            <ul>
                <li>Ein(e) Komponenten/Server hat ein Spec</li>
                <li>Im Standardfall generiert Angular diese</li>
                <li>->Nur mit einem sehr generellen Testfall</li>
            </ul>
        </section>
        <section>
            <b>Jasmine mit Angular</b><br>
            Tests starten:
            <pre><code data-trim data-noescape>
                ng test
            </code></pre>
        </section>
        <section data-auto-animate>
            <b>Aufbau Angular-spec-Datei</b>
            <AngularJasmineExample lines="1-3,21|5-10|12-16|17-20"></AngularJasmineExample>
        </section>
        <section>
            <b>Ihr seid dran!</b><br>
            Ihr findet unter <b>N://angular-testing/projekt</b> ein vorbereitetes Projekt
            <br>
            Importiert dieses bitte in eure IDE
        </section>
        <section>
            <b>Aufgabe:</b><br>
            Schreibt folgende Tests für die Heroes-Component:
            <ul>
                <li>Wurden die Heros vom heroService abgefragt?</li>
                <li>Wurde der Hero korrekt gesetzt?</li>
            </ul>
        </section>
        <section>
            <b>Hinweise zur Aufgabe:</b><br>
            Service in Spec Datei "injecten":
            <pre><code data-trim data-noescape>
                let fixture: ComponentFixture%HeroesComponent%;
                let debugElement: DebugElement;
                let heroService: HeroService;

                debugElement = fixture.debugElement;
                heroService = debugElement.injector.get(HeroService);
            </code></pre>
        </section>
    </section>
</template>

<script>
    import AngularJasmineExample from '../../templates/4-jasmine/angular-jasmine-example'
    export default {
        name: 'AngularKomponentenTesten',
        components: {
            AngularJasmineExample
        }
    }
</script>