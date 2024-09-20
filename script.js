document.getElementById('questionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const question = document.getElementById('question').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;

    fetch('https://cartromresp.vercel.app/api/responses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question, rating, comment })
    })
    .then(response => {
        if (response.ok) {
            alert('Formulário enviado com sucesso!');
            document.getElementById('questionForm').reset();
        } else {
            alert('Erro ao enviar o formulário.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});
