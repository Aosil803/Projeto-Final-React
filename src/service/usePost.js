import axios from "axios";

const apiMock = axios.create({
	baseURL: 'https://6660c1015425580055b52043.mockapi.io/api' , //url da API de conselhos aleatorios
    headers: {
        'Content-Type': 'application/json'
      }
});

export function postUser(usuario) { // ver como fazer para quando mudar de personagem e mudar os conselhos
	const url = '/usuarios';

    console.log(usuario)
	return apiMock.post(url, {body: usuario}).then(url).catch(console.error());
}

//validação com then ou await
