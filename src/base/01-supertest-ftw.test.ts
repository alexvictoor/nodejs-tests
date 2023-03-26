import express, { Router } from 'express';
import { describe, expect, it } from 'vitest';
import request from 'supertest';

describe('Express ', () => {

    /**
     * On commence sans les deux set
     * En get et ensuite on peut passer en post
     * 
     */
    it('supertest FTW', async () => {
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
        expect(response.ok).toBe(true);
    })
})