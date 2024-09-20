document.getElementById('questionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const question = document.getElementById('question').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;

 fetch('https://cartromresp.vercel.app/', {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    
});

        body: JSON.stringify({ question, rating, comment })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        return response.json();
    })
    .then(data => {
        alert('Formulário enviado com sucesso!');
        document.getElementById('questionForm').reset();
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao enviar o formulário. Verifique o console para mais detalhes.');
    });
});
