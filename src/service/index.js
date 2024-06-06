import axios from "axios";

const apiAdvice = axios.create({
	baseURL: 'https://api.adviceslip.com/advice' //url da API de conselhos aleatorios
});

export function getConselhoById() {
	const url = '/7';

	return apiAdvice.get(url).then(url).catch(console.error());
}

//validação com then ou await
