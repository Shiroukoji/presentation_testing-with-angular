<template>
    <pre><code data-trim data-noescape :data-line-numbers="lines">
        describe("when song has been paused", function() {
            beforeEach(function() {
                player.play(song);
                player.pause();
            });
            it("should indicate song is paused", function() {
                expect(player.isPlaying).toBeFalsy();
            });
            it("should be possible to resume", function() {
                player.resume();
                expect(player.isPlaying).toBeTruthy();
                expect(player.currentlyPlayingSong).toEqual(song);
            });
        });
    </code></pre>
</template>

<script>
    export default {
        name: 'JasmineExample',
        props: {
            lines: String
        }
    }
</script>