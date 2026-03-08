import database from './db/database.mjs';
import { ObjectId } from 'mongodb';

const docs = {
    getAll: async function getAll() {
        const db = await database.getDb();
        try {
            return await db.collection.find({}).toArray(); // MongoDB's "SELECT *"
        } catch (e) {
            console.error(e);
            return [];
        } finally {
            await db.client.close(); // Important: Close connection
        }
    },

    getOne: async function getOne(id) {
        const db = await database.getDb();
        try {
            // Check if the ID is valid before trying to use it
            if (!ObjectId.isValid(id)) {
                return { error: "Invalid ID format" };
            }
            return await db.collection.findOne({ _id: new ObjectId(id) });
        } catch (e) {
            console.error(e);
            return {};
        } finally {
            await db.client.close();
        }
    },
    addOne: async function addOne(body) {
        const db = await database.getDb();
        try {
            const result = await db.collection.insertOne(body);
            return { lastID: result.insertedId }; 
        } finally {
            await db.client.close();
        }
    },

    updateOne: async function updateOne(id, body) {
        const db = await database.getDb();
        try {
            return await db.collection.updateOne(
                { _id: new ObjectId(id) },
                { $set: body } // Only update the fields provided
            );
        } finally {
            await db.client.close();
        }
    }
};

export default docs;

// import openDb from './db/database.mjs';

// const docs = {
//     getAll: async function getAll() {
//         let db = await openDb();

//         try {
//             return await db.all('SELECT rowid as id, * FROM documents');
//         } catch (e) {
//             console.error(e);

//             return [];
//         } finally {
//             await db.close();
//         }
//     },

//     getOne: async function getOne(id) {
//         let db = await openDb();

//         try {
//             return await db.get('SELECT rowid as id, * FROM documents WHERE rowid=?', id);
//         } catch (e) {
//             console.error(e);
//             return {};
//         } finally {
//             await db.close();
//         }
//     },

//     addOne: async function addOne(body) {
//         let db = await openDb();

//         try {
//             return await db.run(
//                 'INSERT INTO documents (title, content) VALUES (?, ?)',
//                 body.title,
//                 body.content,
//             );
//         } catch (e) {
//             console.error(e);
//         } finally {
//             await db.close();
//         }
//     },

//         // Method to update an existing document
//     updateOne: async function updateOne(id, body) {
//         let db = await openDb();
//         try {
//             return await db.run(
//                 'UPDATE documents SET title = ?, content = ? WHERE rowid = ?',
                
//                 body.title,
//                 body.content,
//                 id
//             );
//         } catch (e) {
//             console.error(e);
//         } finally {
//             await db.close();
//         }
//     }
// };

// export default docs;
