import { expect } from 'chai';
import request from 'supertest';
import app from '../app.mjs';

describe('API Tests', () => {
    // 1. Testa att hämta alla (denna går redan igenom)
    it('should return all documents as JSON', async () => {
        const res = await request(app).get('/');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
    });

    // 2. Skapa ett dokument först, hämta det sen
    it('should create and then return a specific document', async () => {
        // Skapa ett dokument i test-databasen först
        const newDoc = { title: "Test Doc", content: "Test Content" };
        const createRes = await request(app).post('/').send(newDoc);
        const newId = createRes.body.id; // Hämta det genererade ID:t

        // Hämta just det dokumentet
        const res = await request(app).get(`/${newId}`);
        
        expect(res.status).to.equal(200);
        expect(res.body).to.not.be.null;
        expect(res.body).to.have.property('_id', newId);
        expect(res.body.title).to.equal("Test Doc");
    });
});