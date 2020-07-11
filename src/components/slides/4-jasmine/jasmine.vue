<template>
    <section>
        <section>
            <img src="../../../assets/icons/language-services.svg" height="100px">
            <br>
            Jasmine
        </section>
        <section>
            <b>Erste Testumgebung aufsetzen</b>
            <pre><code data-trim data-noescape>
            npm init
            npm install jasmine
            npx jasmine init
            npx jasmine examples
            npx jasmine
            </code></pre>
            Ihr solltet nun 5 erfolgreiche Tests haben!
        </section>
        <section data-auto-animate>
            <b>Aufbau eines Testfalls</b>
            <JasmineExample lines="1,14|2-5|6-13"></JasmineExample>
        </section>
        <section>
            <b>Wie sieht eine Testbeschreibung aus, wenn ein Song läuft?</b>
        </section>
        <section>
            <b>Spies</b>
        </section>
        <section>
            <b>Spies</b>
            <ul>
                <li>Die JavaScript Testingtools nutzen hauptsächlich Spies</li>
                <li>Mocks werden nur von einigen Testtools unterstützt, und das nur rudimentär</li>
            </ul>
        </section>
        <section>
            <b>Erstellen eines Spies</b>
            <pre><code data-trim data-noescape>
                objectSpy = spyOn(object, 'methodenName')
            </code></pre>
        </section>
        <section>
            <b>Verwenden eines Spies</b>
            <pre><code data-trim data-noescape>
                objectSpy.and.callThrough() //Methodenaufrufe monitoren
                objectSpy.and.returnValue(returnValue) //Rückgabe definieren
                objectSpy.and.callFake(fakeFunction) //Durch Fakemethode ersetzen
            </code></pre>
        </section>
    </section>
</template>

<script>
    import JasmineExample from '../../templates/4-jasmine/jasmine-example.vue'
    export default {
        name: 'Jasmine',
        components: {
            JasmineExample
        }
    }
</script>