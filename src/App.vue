<template>
    <div class="reveal" id="app">
        <Presentation></Presentation>
    </div>
</template>

<script>
    import Reveal from 'reveal.js';
    import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
    import Presentation from './components/Presentation'

    export default {
        name: 'App',
        components: {
            Presentation
        },
        mounted() {
            Reveal.initialize({
                plugins: [ Highlight ],
                backgroundTransition: 'zoom'
            })
        }
    }
</script>

<style>
    @import url('../node_modules/reveal.js/dist/reveal.css');
    @import url('../node_modules/reveal.js/dist/theme/blood.css');
    @import url('../node_modules/reveal.js/plugin/highlight/monokai.css');
</style>
