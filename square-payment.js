import { Payments } from 'https://sandbox.web.squarecdn.com/v1/square.js';

async function initializeSquare() {
  const payments = Payments('sandbox-sq0idb-WNoRZeYCPaAI9nZDABLpdg', 'LW2F13NTDXAH9');

  const card = await payments.card();
  await card.attach('#payment-form');

  const submitButton = document.getElementById('submit-button');
  submitButton.addEventListener('click', async () => {
    const result = await card.tokenize();
    if (result.status === 'OK') {
      alert('Card tokenized! Token: ' + result.token);
    } else {
      alert('Tokenization failed!');
      console.log(result.errors);
    }
  });
}

initializeSquare();
