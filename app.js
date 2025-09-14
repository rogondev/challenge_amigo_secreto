let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById ("amigo");

    let nome = input.value;
    console.log("Nome digitado:", nome);

    if (nome.trim() ==="") {
        alert("Insira um nome.")
        return           
    }

    amigos.push(nome);
    console.log("Lista de amigos agora:", amigos);

    atualizarLista();

    input.value = "";
    console.log("O input foi limpo");
}
let input = document.getElementById("amigo");

input.addEventListener("keydown", function(evento) {
    if (evento.key === "Enter") {
        adicionarAmigo();
    }
});

function atualizarLista() {
    let lista = document.getElementById ("listaAmigos");
    
    lista.innerHTML = ""

 for (let i = 0; i < amigos.length; i++) {
       
        let item = document.createElement("li");

    item.textContent = amigos[i];

    lista.appendChild(item);
 }
    console.log("Lista atualizada com", amigos.length, "amigos");
}

 function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert("Não há amigos disponíveis para sortear.");
        return;
    }

    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    console.log("Índice sorteado:", indiceAleatorio);


    let amigoSorteado = amigos[indiceAleatorio];
    console.log("Amigo sorteado:", amigoSorteado);

  
    let resultado = document.getElementById("resultado"); // <p id="resultado"></p>
    resultado.innerHTML = "O amigo secreto sorteado é: <strong>" + amigoSorteado + "</strong>";
}