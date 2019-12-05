const test = [
    {"text":"texto 1"},
    {"text":"texto 2"},
    {"text":"texto 3"},
    {"text":"texto 4"},
    {"text":"texto 5"},
    {"text":"texto 6"},
    {"text":"texto 7"}];
const cont = document.getElementsByClassName("contenedor")[0];

for( let i = 0; i < test.length; i++){
    var html = ""
    html = `
            <div draggable="true" class="lista">
                <div class="item">
                    ${test[i].text}
                </div>
            </div>`;
    cont.innerHTML += html;
}
items = document.getElementsByClassName("lista");
new Sortable(cont, {
    animation: 200,
    onStart: function(evt){
        console.log(evt.item.getElementsByClassName("item")[0].innerHTML)
        evt.item.getElementsByClassName("item")[0].style.visibility="hidden";
    },
    onEnd: function(evt){
        evt.item.getElementsByClassName("item")[0].style.visibility="visible";
    }
});
