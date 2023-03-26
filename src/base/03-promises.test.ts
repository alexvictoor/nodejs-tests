import express, { Router } from 'express';
import PromiseRouter from 'express-promise-router';
import { describe, expect, it } from 'vitest';
import request from 'supertest';

describe('Express ', () => {

    it('le router express de base ne gère pas les promesses', async () => {
        const app = express();
        const router = PromiseRouter();
        router.get('/crash', async (request, response) => {
           throw new Error('Une erreur qui ne devrait pas tuer le serveur')
        })
        app.use('/api', router);

        // une réponse qui n'arrivera jamais...
        const response = await request(app).get(`/api/crash`);
        expect(response.ok).toBe(false);
    }, 500)

})