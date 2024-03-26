const api = 'http://localhost:3000'

async function sendRequest(
	sendMethod: string,
	enpoint: string,
	data: object | null,
) {
	let url = `${api}/${enpoint}`

	type opt = {
		method: string
		headers: object
		body: undefined | null | object
	}

	let options: opt = {
		method: sendMethod,
		headers: {
			'Content-Type': 'application/json',
		},
	}

	// data ? (options.body = JSON.stringify(data)) : "";

	try {
		const response = await fetch(url, options)
		return await response.json()
	} catch (err) {
		console.log('Error: ' + err)
	}
}

const $ = (dom) => document.querySelector(dom)
const $$ = (doms) => document.querySelectorAll(doms)

const user = JSON.parse(localStorage.getItem('user')) ?? ''

export { $, $$, user, sendRequest }
