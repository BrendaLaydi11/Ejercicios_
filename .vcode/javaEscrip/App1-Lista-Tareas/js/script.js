//comportamiento 

class ListaTareas {
    constructor() {
        this.tareas = JSON.parse(localStorage.getItem('tareas'));
        //cuando no aya  tareas  en la  propiedad tareas  
        if (!this.tareas) {
            this.tareas = [

                { tarea: 'Aprediendo', completado: false },

                { tarea: "Hacer cosas", completado: false },

                { tarea: "Terminar labores", completado: true },
            ];
        }
 
        this.cargarTareas();
        this.agregarEventListeners();
    }

    agregarEventListeners() {
        document.getElementById('recordatorio').addEventListener('keypress', (evento) => {
            if (evento.keyCode == 13) {
                this.agregarTarea(evento.target.value)
                evento.target.value = '';
            }
        });
    }
    cargarTareas() {
        //Las  tareas  guardadas arreglo de  objetos   convertir  una cadena  
        localStorage.setItem('tareas', JSON.stringify
            (this.tareas));
        let htmlTareas = this.tareas.reduce((html, tarea, indice) =>
            html += this.generarHtmlTarea(tarea, indice), '');
        document.getElementById('listaTareas').innerHTML=htmlTareas;
    }

    cambiarEstadoTarea(indice) {
        this.tareas[indice].completado = !this.tareas
        [indice].completado;
        this.cargarTareas();
        console.log(this.tareas[indice]);
        this.cargarTareas();
    }
    eliminarTarea(evento, indice) {
        evento.preventDefault();
        this.tareas.splice(indice, 1);
        this.cargarTareas();
    }

    generarHtmlTarea(tarea, indice) {
        return `
        <div class="container">
       
            <div class=" checkbox">
                <label>
                    <input id="cambiarEstadoTarea" type="checkbox" onchange="listaTareas.cambiarEstadoTarea(${indice})" value="" class="checkbox" ${tarea.completado ? 'checked': ''}>
                </label>
            
            <div class="texto-tarea ${tarea.completado ? 'tarea-completada' : ''}">
                ${tarea.tarea}
            </div>
            <div class=" area-icono-eliminacion">
                <a class="" href="/" onclick="listaTareas.eliminarTarea(event, ${indice})">
                    <i id="eliminarTarea" data-id=${indice}  ></i>
                    <img src="./../media/compartimiento.svg"> 
                </a>
            </div>
        </div>
    </div>

        `;
    }
    
agregarTarea(tarea) {
    let padre = document.getElementById('recordatorio').parentElement;
    if (tarea !== ''){
        padre.classList.remove('error');
        let nuevaTarea = {
            tarea,
            completado: false
        };
        this.tareas.push(nuevaTarea);
        this.cargarTareas();
    } else {
        padre.classList.add('has-error');
    }
}
agregarTareaClick() {
    let recordatorio = document.getElementById('recordatorio');
    let tarea = recordatorio.value;
    if (tarea){
        this.agregarTarea(tarea);
        recordatorio.value = '';
    }
}
}
let listaTareas;
window.addEventListener('load', () => {
listaTareas = new ListaTareas();
})