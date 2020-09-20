const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción ${id}...`),
    pausar: () => console.log(`Pausando...`),
    borrar: id => console.log(`Borrando canción ${id}`),
    crearPlaylist: nombre => console.log(`Creando playlist de ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist ${nombre}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`)
    },

    get obtenerCancion() {
        console.log(`${this.cancion}`)
    }
}

reproductor.nuevaCancion = 'Enter Sandman'
reproductor.obtenerCancion;

reproductor.reproducir(30)
reproductor.pausar()
reproductor.borrar(30)
reproductor.crearPlaylist('Heavy Metal')
reproductor.crearPlaylist('Rock 90s')
reproductor.reproducirPlaylist('Heavy Metal')