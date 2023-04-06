import express, { Router } from 'express';
import { describe, it } from 'vitest';
import request from 'supertest';

describe('Express ', () => {

    it.skip('ne pas oublier de répondre', async () => {
        const app = express();
        const router = Router();
        router.get('/oubli', (request, response) => {
           // vide
        })
        app.use('/api', router);

        // si le serveur ne répond pas, le client n'a pas de réponse...
        const response = await request(app).get(`/api/oubli`);

    }, 500)
})