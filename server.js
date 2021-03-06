const express = require('express');
const cors = require('cors');
const app = express();

app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use(express.json());
app.use(cors());

const API_PORT = process.env.PORT || 5000;

app.get('/api', (req, res) => {
	console.log('api path');
	res.send({ response: 'hello api' });
});

app.get('/quit', (req, res) => {
	console.log('api path');
	res.send({ response: 'hello quit' });
});

app.post('/text', (req, res) => {
	console.log('post path', req.body);
	res.json(req.body);
});

app.listen(API_PORT, () =>
	console.log(`Server is listening at port : ${API_PORT}`)
);
