const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

const app = express();


sgMail.setApiKey('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');

app.use(cors());
app.use(bodyParser.json());

app.post('/sendmail', (req, res) => {
    const { to, subject, text } = req.body;

    const msg = {
        to,
        from: 'pashtet0501@gmail.com',
        subject,
        text,
    };

    sgMail.send(msg)
        .then(() => res.status(200).send('Message sent successfully'))
        .catch((error) => {
            console.error(error);
            res.status(500).send('Error sending message');
        });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
