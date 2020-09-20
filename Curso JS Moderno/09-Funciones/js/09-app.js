const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción ${id}...`)
    },
    pausar: function() {
        console.log(`Pausando...`)
    },
    borrar: function(id) {
        console.log(`Borrando canción ${id}`)
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando playlist de ${nombre}`)
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la playlist ${nombre}`)
    }
}

reproductor.reproducir(30)
reproductor.pausar()
reproductor.borrar(30)
reproductor.crearPlaylist('Heavy Metal')
reproductor.crearPlaylist('Rock 90s')
reproductor.reproducirPlaylist('Heavy Metal')