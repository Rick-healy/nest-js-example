import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/items (GET)', () => {
    return request(app.getHttpServer())
      .get('/items')
      .expect(200)
      .expect(response => {
        expect(Array.isArray(response.body)).toBeTruthy();
      });
  });

  it('/items (POST) - single item in array format', () => {
    return request(app.getHttpServer())
      .post('/items')
      .send([{
        name: 'Test Item',
        description: 'A test item created during e2e test',
        price: 19.99
      }])
      .expect(201)
      .expect(response => {
        expect(response.body).toHaveProperty('count');
        expect(response.body.count).toBe(1);
      });
  });

  it('/items (POST) - multiple items', () => {
    return request(app.getHttpServer())
      .post('/items')
      .send([
        {
          name: 'Test Array Item 1',
          description: 'First item in array during e2e test',
          price: 11.99
        },
        {
          name: 'Test Array Item 2',
          description: 'Second item in array during e2e test',
          price: 12.99
        }
      ])
      .expect(201)
      .expect(response => {
        expect(response.body).toHaveProperty('count');
        expect(response.body.count).toBe(2);
        expect(response.body).toHaveProperty('ids');
        expect(Array.isArray(response.body.ids)).toBeTruthy();
      });
  });

  it('/items (POST) - non-array format should fail', () => {
    return request(app.getHttpServer())
      .post('/items')
      .send({
        name: 'Test Single Item',
        description: 'This should fail as it is not in array format',
        price: 19.99
      })
      .expect(400);
  });

  it('/health (GET)', () => {
    return request(app.getHttpServer())
      .get('/health')
      .expect(200)
      .expect(response => {
        expect(response.body).toHaveProperty('status');
        expect(response.body).toHaveProperty('timestamp');
        expect(response.body).toHaveProperty('service');
        expect(response.body).toHaveProperty('environment');
        expect(response.body.status).toBe('ok');
      });
  });
});
