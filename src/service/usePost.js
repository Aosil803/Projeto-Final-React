import axios from "axios";

const apiMock = axios.create({
	baseURL: 'https://6660c1015425580055b52043.mockapi.io/api' ,
    headers: {
        'Content-Type': 'application/json'
      }
});

export function postUser(usuario) {
	const url = '/usuarios';

    console.log(usuario)
	return apiMock.post(url, {body: usuario}).then(url).catch(console.error());
}

