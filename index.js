setTimeout(apresentarModal,5000);
function apresentarModal(){
    var modal = document.querySelector(".modal");
    if(modal != null){
        document.querySelector(".modal").style.display = "block";

        document.querySelector(".modal a").addEventListener("click", function(){
            document.querySelector(".modal").style.display = "none";
        });
    }
}

if(document.forms["modal_form"] != undefined){
    var form = document.forms["modal_form"];

    form.addEventListener("submit", validarFormModal);
    form.email.addEventListener("keyup", function(){
        form.email.className = "";
        document.querySelector("span.nao_valido").style.display = "none"
    })
}

function validarFormModal(evt){
    var form = document.forms["modal_form"];
    var inputEmail = form.email;
    var valorEmail = form.email.value;
    var posicaoArroba = valorEmail.indexOf("@")
    
    if(
        valorEmail != "" &&
        valorEmail.indexOf("@") > 3 &&
        valorEmail.lastindexOf(".") > posicaoArroba
    ){
        
    } else {
        inputEmail.className = "nao_valido";
        document.querySelector("span.nao_valido").style.display = "block"
        evt.preventDefault();
    }
}
