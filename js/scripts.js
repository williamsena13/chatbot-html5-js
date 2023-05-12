var respostas = {
    "como funciona": "Para obter uma resposta, é necessário cadastrar préviamente a pergunta e a resposta",
};

tabela();

function tabela() {
    var tableBody = document.getElementById("table-body");
    let data = respostas
    for (var key in data) {
        var value = data[key];
        var row = document.createElement("tr");
        var keyCell = document.createElement("td");
        var valueCell = document.createElement("td");
        keyCell.textContent = key + "?";
        valueCell.textContent = value;
        row.appendChild(keyCell);
        row.appendChild(valueCell);
        tableBody.appendChild(row);
    }
}

function sendMessage() {
    var message = document.getElementById('message').value;
    document.getElementById('chat').innerHTML += '<p><strong>Você:</strong> ' + message + '</p>';
    document.getElementById('message').value = '';

    try {
        var resposta = respostas[message.toLowerCase()];
        if (resposta) {
            document.getElementById('chat').innerHTML += '<p><strong>Chatbot:</strong> ' + resposta + '</p>';
        } else {
            document.getElementById('chat').innerHTML += '<p><strong>Chatbot:</strong> Desculpe, não entendi sua pergunta. Poderia reformulá-la?</p>';
        }
    } catch (error) {
        alert("ERRO AO BUSCAR RESPOSTA")
    }

}