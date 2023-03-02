class Mundial{
    constructor(equipo, cantidad,goles,estadio,horario,faltas,lesiones){
        this.equipo=equipo
        this.cantidad=cantidad
        this.goles=goles
        this.estadio=estadio
        this.horario=horario
        this.faltas=faltas
        this.lesiones=lesiones
    }
    setequipo (equipo) {
        this.equipo=equipo
    }
    getgoles (goles) {
        this.goles=goles
    }
    setcantidad (cantidad) {
        this.cantidad=cantidad
    }
    getestadio (estadio) {
        this.estadio=estadio
    }
    setfaltas (faltas) {
        this.faltas=faltas
    }
    
    fechafinal(){
        console.log('El mundia acaba el 20 de Diciembre')
    }
}

qatar = new Mundial(32,86,50,'Al-mohamed','4:00 am',120,2)
console.log(qatar.fechafinal(equipo))

Ruisa = new Mundial(22,86,150,'KIEV','10:00 am',120,2)
console.log(Rusia.fechafinal(fechafinal))