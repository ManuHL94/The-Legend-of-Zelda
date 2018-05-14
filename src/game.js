window.addEventListener('load', function() {
    /**
     * Variable principal del Quintus.
     */
    var Q = Quintus({ audioSupported: ['mp3', 'ogg'] })
        /**
         * Se añaden los módulos necesarios para el funcionamiento de
         * la aplicación.
         */
        .include('Sprites, Scenes, Input, 2D, Anim, Touch, UI, TMX, Audio')
        /**
         * Se ajusta la ventana.
         */
        .setup({
            width: 800,
            height: 800
        })
        /**
         * Se le añade funcionalidad.
         */
        .controls().touch().enableSound();
    /**
     * Cargamos los diversos componenentes que utilizaremos durante el juego.
     */
    loadLevel1(Q);
    
    /**
     * Cargamos los ficheros que necesitamos para el juego.
     */
    Q.loadTMX('city.tmx', function() {
        Q.stageScene('level1');
    });
});