import axios from "axios";

const apiAdvice = axios.create({
	baseURL: 'https://api.adviceslip.com/advice' //url da API de conselhos aleatorios
});

export function getConselhoById() { // ver como fazer para quando mudar de personagem e mudar os conselhos
	const url = '/7';

	return apiAdvice.get(url);
}

//validação com then ou await
