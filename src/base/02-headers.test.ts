import express, { Router } from 'express';
import { describe, expect, it } from 'vitest';
import request from 'supertest';

describe('Express ', () => {

    /**
     * On commence sans les deux set
     * 
     */
    it('Useless default headers', async () => {
        // given
        const app = express();
        app.set('x-powered-by', false);
        app.set('etag', false);
        
        const router = Router();
        router.post('/romes', async (request, response) => {
           response.json({ ok: true })
        })
        app.use('/api', router);

        // when
        const response = await request(app).post(`/api/romes`);

        // then
        const headers = response.headers; //?
        expect(headers['x-powered-by']).toBeUndefined();
        expect(headers.etag).toBeUndefined();

    })
})