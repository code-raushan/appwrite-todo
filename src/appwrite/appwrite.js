//configuration of Appwrite
import {Client, Account, Databases} from 'appwrite';

//creating a client
const client = new Client();

export const account = new Account(client)

//setting endpoints and project
client.setEndpoint('http://localhost/v1')
client.setProject('6391c2755850412379ee')

//creating a new account

//attaching database to the client
export const database = new Databases(client, '6391c36ae492700a2489')
