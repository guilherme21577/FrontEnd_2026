function revelar() {
    // 1. Alterar o atributo src da imagem principal
    document.querySelector('.card-img-top').src = 'img/_vinicius_junior.png';
    
    // 2. Substituir o conteúdo dos <span> pelos dados reais
    document.getElementById('Nome').textContent = 'Vinícius José Paixão de Oliveira Júnior';
    document.getElementById('Rank').textContent = '9,5';
    document.getElementById('Data_Nas').innerHTML = '<strong>Nascimento:</strong> 12/07/2000 (25 anos)';
    document.getElementById('Alutra').innerHTML = '<strong>Altura:</strong> 1,76 m';
    document.getElementById('Posição').innerHTML = '<strong>Posição:</strong> Ponta-esquerda / Atacante';
    
    // 3. Remover a classe CSS "placeholder" de todos os elementos afetados
    const elementos = document.querySelectorAll('#Nome, #Rank, #Data_Nas, #Alutra, #Posição, .card-img-top');
    elementos.forEach(elemento => {
        elemento.classList.remove('placeholder');
    });
    
    // 4. Aplicar a classe "card-text" para finalizar a estilização
    const spans = document.querySelectorAll('#Data_Nas, #Alutra, #Posição');
    spans.forEach(span => {
        span.classList.add('card-text');
    });
    
    // Opcional: Desabilitar o botão após revelar
    document.querySelector('button[onclick="revelar()"]').disabled = true;
    document.querySelector('button[onclick="revelar()"]').textContent = 'Revelado!';
}