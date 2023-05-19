import { Account, Client, Databases, ID, Query } from "appwrite";
const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64678a0cc0a34326c96f");

export const createAccount = async (email, password, name) => {
  try {
    const account = new Account(client);
    return await account.create(ID.unique(), email, password, name);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (email, password) => {
  try {
    const account = new Account(client);
    return await account.createEmailSession(email, password);
  } catch (error) {
    console.log(error);
  }
};

export const getAccount = async () => {
  try {
    const account = new Account(client);
    return await account.get();
  } catch (error) {
    console.log(error);
  }
};

export const listDocuments = async () => {
  try {
    const database = new Databases(client);
    const account = new Account(client);
    const user = await account.get();
    return await database.listDocuments(
      "64678a6bc3f1ea027814",
      "64679034cdd4bba5577a",
      [Query.equal("userId", [user.$id])]
    );
  } catch (error) {
    console.log(error);
  }
};

export const createDocument = async (text) => {
  try {
    const database = new Databases(client);
    const account = new Account(client);
    const user = await account.get();
    return await database.createDocument(
      "64678a6bc3f1ea027814",
      "64679034cdd4bba5577a",
      ID.unique(),
      {
        userId: user.$id,
        text,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const updateDocument = async (id, bool) => {
  try {
    const database = new Databases(client);
    return await database.updateDocument(
      "64678a6bc3f1ea027814",
      "64679034cdd4bba5577a",
      id,
      {
        completed: bool,
      }
    );
  } catch (error) {
    console.log(error);
  }
};
