const form = document.getElementById('form-contato');
const lista = document.getElementById('lista-contatos');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();

    if (nome && telefone) {
    const linha = document.createElement('tr');
    linha.innerHTML = `<td>${nome}</td><td>${telefone}</td>`;
    lista.appendChild(linha);

    // Limpa os campos
    form.reset();}
});
