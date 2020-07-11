<template>
    <div class="slides">
        <Title></Title>
        <GrundlagenTesting></GrundlagenTesting>
        <AngularProjektaufbau></AngularProjektaufbau>
        <AngularTestingsuite></AngularTestingsuite>
        <Jasmine></Jasmine>
        <AngularKomponentenTesten></AngularKomponentenTesten>
    </div>
</template>

<script>
    import Title from './slides/Title'
    import GrundlagenTesting from './slides/1-testing-grundlagen/testing-grundlagen'
    import AngularProjektaufbau from './slides/2-angular-projektaufbau/angular-projektaufbau'
    import AngularTestingsuite from './slides/3-angular-testingsuite/angular-testingsuite'
    import Jasmine from './slides/4-jasmine/jasmine'
    import AngularKomponentenTesten from './slides/5-angular-komponenten-testen/angular-komponenten-testen'

    export default {
        name: 'Presentation',
        components: {
            Title,
            GrundlagenTesting,
            AngularProjektaufbau,
            AngularTestingsuite,
            Jasmine,
            AngularKomponentenTesten
        }
    }
</script>