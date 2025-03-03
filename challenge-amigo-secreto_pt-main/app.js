let amigos = [];

function adicionarAmigo(){
 let valor = document.getElementById("amigo").value;
 if (valor == ""){
    alert("Por favor, insira um nome.");
 }else{
    amigos.push(valor);
    limparLista();
    atualizarLista();
 }

}

function limparLista(){
    document.getElementById("amigo").value = "";
    
}


function atualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li); 
    };
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert("Adicione o nome de algum amigo!");
    }else{
        let numeroAleatorio = Math.floor(Math.random() * amigos.length);
        document.getElementById("resultado").innerHTML = `O amigo sorteado foi ${amigos[numeroAleatorio]}`;

    }
}