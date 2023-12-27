import { Client, Account } from 'appwrite';

export const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('658c3422865fec49a10e');

export const account = new Account(client);
export { ID } from 'appwrite';
