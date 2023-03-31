import express, { Router } from 'express';
import { describe, expect, it } from 'vitest';
import request from 'supertest';

describe('Express', () => {

    it.skip('gère des headers pas forcément utiles...', async () => {
        // given
        const app = express();
       
        const router = Router();
        router.post('/romes', async (request, response) => {
           response.json({ ok: true })
        })
        app.use('/api', router);

        // when
        const response = await request(app).post(`/api/romes`);

        // then
        const headers = response.headers;
        expect(headers['etag']).toBeUndefined();

    })
})