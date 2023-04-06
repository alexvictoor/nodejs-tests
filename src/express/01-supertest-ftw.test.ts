import express, { Router } from 'express';
import { describe, expect, it } from 'vitest';
import request from 'supertest';

describe('Express', () => {

    it.skip('Supertest FTW', async () => {
        // given
        const app = express();
        const router = Router();
        router.post('/romes', async (request, response) => {
           response.json({ ok: true })
        })
        app.use('/api', router);

        // when
        const response = await request(app).post(`/api/rome`);

        // then
        expect(response.ok).toBe(true);
    })
})