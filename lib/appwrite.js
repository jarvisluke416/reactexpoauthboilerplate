import { Client, Account, Avatars } from 'appwrite';

const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1') // Your Appwrite endpoint
    .setProject('6808546e0034598064c7'); // Your Appwrite project ID

export const account = new Account(client);
export const avatars = new Avatars(client);
