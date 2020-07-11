<template>
    <section>
        <section>
            <img src="../../../assets/icons/material.svg" height="100px">
            <br>
            Projektaufbau von Angular
        </section>
        <section>
            Welche Dateien sind für das Testing relevant?
        </section>
        <section>
            karma.conf.js:
            <ul>
                <li>Dient der Konfiguration des Testingframeworks</li>
            </ul>
        </section>
        <section>
            src/[...]/*.spec.ts
            <ul>
                <li>Enthält Testbeschreibung</li>
                <li>Pro Komponente/Service eine Datei</li>
            </ul>
        </section>
        <section>
            e2e/[...]
            <ul>
                <li>Enthält Testbeschreibungen für End-to-End-Tests</li>
            </ul>
        </section>
    </section>
</template>

<script>
    export default {
        name: 'AngularProjektaufbau'
    }
</script>