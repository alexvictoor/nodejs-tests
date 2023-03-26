import express, { Router } from 'express';
import PromiseRouter from 'express-promise-router';
import { describe, expect, it } from 'vitest';
import request from 'supertest';

// TODO slides erreurs unhandled directement depuis app sans routeur
// TODO un fichier par test case
// TODO mettre eslint sur le projet

describe('Express ', () => {

    it('ne pas oublier de répondre', async () => {
        const app = express();
        const router = Router();
        router.get('/oubli', (request, response) => {
           response.end();
        })
        app.use('/api', router);

        // une réponse qui n'arrivera jamais...
        const response = await request(app).get(`/api/oubli`);

    }, 500)
})