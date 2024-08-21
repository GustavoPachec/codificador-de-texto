const palavrasChaves = {
  'e': 'enter', 
  'i': 'imes',
  'a': 'ai',
  'o': 'ober',
  'u': 'ufat'
};

function verificarPalavras(texto){
  return texto.split('').map(letra => palavrasChaves[letra] || letra).join(''); 
}

function verificarBotoes(){
  let input = document.getElementById('input_criptografado').value.trim();
  let btnCriptografar = document.getElementById('btn_criptografar');
  let btndescriptografar = document.getElementById('btn_descriptografar');

  if (input === "") {
    btnCriptografar.disabled = true;
    btndescriptografar.disabled = true;
  } else {
    btnCriptografar.disabled = false;
    btndescriptografar.disabled = false;
  }
}

function criptografarTexto(){
  let inputCriptografado = document.getElementById('input_criptografado').value;  
  let resultadoCriptografado = verificarPalavras(inputCriptografado);
  
  document.getElementById('img_result').style.display = 'none';
  document.getElementById('titulo_resultado').style.display = 'none';
  document.getElementById('texto_resultado').textContent = resultadoCriptografado;
  document.getElementById('resultado').classList.add('resultado-div');
}

function descriptografarTexto(){
  let inputCriptografado = document.getElementById('input_criptografado').value;
  let resultadoDescriptografado = inputCriptografado;

  for (let [chave, valor] of Object.entries(palavrasChaves)) {
    let regex = new RegExp(valor, 'g');
    resultadoDescriptografado = resultadoDescriptografado.replace(regex, chave);
  }

  document.getElementById('img_result').style.display = 'none';
  document.getElementById('titulo_resultado').style.display = 'none';
  document.getElementById('texto_resultado').textContent = resultadoDescriptografado;
  document.getElementById('resultado').classList.add('resultado-div');
}
