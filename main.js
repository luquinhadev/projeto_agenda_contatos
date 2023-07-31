const form = document.getElementById('form-agenda');
const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (numeros.includes(inputNumeroContato.value)) {
    alert(`Esse número: ${inputNumeroContato.value} Já existe`);
    } else 

    if (nomes.includes(inputNomeContato.value)) {
        alert(`Esse nome: ${inputNomeContato.value} Já existe`);

    } else {
        nomes.push(inputNomeContato.value);
        numeros.push(inputNumeroContato.value);
   
let linha = '<tr>';
linha += `<td>${inputNomeContato.value} </td>`;
linha += `<td>${inputNumeroContato.value} </td>`;
linha += `<td>${inputNomeContato.value ? 'Salvo' : 'Não salvo'}</td>`;
linha += '</tr>';

linhas += linha;
}

inputNomeContato.value = '';
inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

