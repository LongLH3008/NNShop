type address = {
	address: string
	city: string
	coordinates: {
		lat: number
		lng: number
	}
	postalCode: string
	state: string
}

type userBank = {
	cardExpire: string
	cardNumber: string
	cardType: string
	currency: string
	iban: string
}

type userCompany = {
	address: address
	department: string
	name: string
	title: string
}

type cryptoinfo = {
	coin: string
	wallet: string
	network: string
}

export type Users = {
	id: number
	firstName: string
	lastName: string
	maidenName: string
	age: number
	gender: string
	email: string
	phone: string
	username: string
	password: string
	birthDate: string
	image: string
	bloodGroup: string
	height: number
	weight: number
	eyeColor: string
	hair: {
		color: string
		type: string
	}
	domain: string
	ip: string
	address: address
	macAddress: string
	university: string
	bank: userBank
	company: userCompany
	ein: string
	ssn: string
	userAgent: string
	crypto: cryptoinfo
}
