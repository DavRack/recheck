const listas = [{
    "titulo":"lista 1",
    "tareas":[
        {"titulo":"texto 1"},
        {"titulo":"texto 2"},
        {"titulo":"texto 3"},
        {"titulo":"texto 4"}],
    "cuerpo":`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    "tags":["test","prueba","unal","peligro"],
},
    {
        "titulo":"lista 2",
        "tareas":[
            {"titulo":"texto 1"},
            {"titulo":"texto 2"},
            {"titulo":"texto 3"},
            {"titulo":"texto 4"}],
        "cuerpo":`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        "tags":["test","prueba","unal","peligro"],
    },
    {
        "titulo":"lista 3",
        "tareas":[
            {"titulo":"texto 1"},
            {"titulo":"texto 2"},
            {"titulo":"texto 3"},
            {"titulo":"texto 4"}],
        "cuerpo":`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        "tags":["test","prueba","unal","peligro"],
    }];
const configuracionSordable = {
    animation: 200,
    onStart: function(evt){
        evt.item.getElementsByClassName("item")[0].style.visibility="hidden";
        var nota = evt.item.getElementsByClassName("nota");
        if (nota.length > 0){
            nota[0].style.visibility="hidden";
        }
    },
    onEnd: function(evt){
        evt.item.getElementsByClassName("item")[0].style.visibility="visible";
        var nota = evt.item.getElementsByClassName("nota");
        if (nota.length > 0){
            nota[0].style.visibility="visible";
        }
    }
};
function dibujarNotas(notas){
    //limpar notas viejas
    document.getElementById("contenedor-notas").innerHTML = "";

    for(var i = 0; i < notas.length; i++){
        var html=`
            <div class="nota">
                <h1>${notas[i].titulo}</h1>
                <div class="tareas">`
        for(var j = 0; j < notas[i].tareas.length;j++){
            html += `
                    <div draggable="true" class="lista">
                        <div class="item">
                            ${listas[i].tareas[j].titulo}
                        </div>
                    </div>`
        }
        html +=`
                </div>
            </div>`
        document.getElementById("contenedor-notas").innerHTML += html;
    }

    //hacer reorganizables las notas
    var notas = document.getElementById("contenedor-notas");
    new Sortable(notas, configuracionSordable);

    const cont = document.getElementsByClassName("tareas");
    for(var j = 0; j < cont.length; j++) {
        new Sortable(cont[j], configuracionSordable);
    }
}

// START

dibujarNotas(listas);
