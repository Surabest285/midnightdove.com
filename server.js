const express = require('express');
const app = express();
const openai = require('openai');

const chatGpt = new openai.ChatCompletion('<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>');

app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  const response = await chatGpt.complete([
    {
      role: 'system',
      content: 'You are a helpful assistant.'
    },
    {
      role: 'user',
      content: message
    }
  ]);

  const botReply = response.choices[0].message.content;
  res.json({ reply: botReply });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
