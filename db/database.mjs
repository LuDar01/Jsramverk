import { MongoClient } from 'mongodb';
import 'dotenv/config';

const collectionName = "documents";

const database = {
    getDb: async function getDb() {

        let dsn = `mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@cluster0.lrmr5th.mongodb.net/folinodocs?retryWrites=true&w=majority`;
        if (process.env.NODE_ENV === 'test') {
            dsn = "mongodb://localhost:27017/test";
        } 

        const client = await MongoClient.connect(dsn);
        const db = await client.db();
        const collection = await db.collection(collectionName);

        return {
            collection: collection,
            client: client,
        };
    }
};

export default database;

// let dsn = `mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@cluster0.hkfbt.mongodb.net/folinodocs?retryWrites=true&w=majority`;

// const collectionName = "documents";

// const database = {
//     getDb: async function getDb() {
//         // This is your local connection string
//         let dsn = "mongodb://localhost:27017/jsramverk";

//         if (process.env.NODE_ENV === 'test') {
//             dsn = "mongodb://localhost:27017/test";
//         }

//         const client = await MongoClient.connect(dsn);
//         const db = await client.db();
//         const collection = await db.collection(collectionName);

//         return {
//             collection: collection,
//             client: client,
//         };
//     }
// };

// export default database;

// import sqlite3 from 'sqlite3';
// import { open } from 'sqlite';

// async function openDb() {
//     let dbFilename = `./db/docs.sqlite`;

//     if (process.env.NODE_ENV === 'test') {
//         dbFilename = "./db/test.sqlite";
//     }

//     return await open({
//         filename: dbFilename,
//         driver: sqlite3.Database
//     });
// }


// export default openDb;
