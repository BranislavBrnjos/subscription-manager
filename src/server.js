import { createServer, Model } from "miragejs"
import uuid from 'react-uuid'

createServer({
    models: {
      subscription: Model,
    },
    seeds(server) {
        server.create('subscription', { id: uuid(), name: 'Spotify Premium', price: 50, frequency: 'Monthly', description: 'Subscription #1', createdAt: Date.now(), updatedAt: '' })
        server.create('subscription', { id: uuid(), name: 'Youtube Premium', price: 100, frequency: 'Monthly', description: 'Subscription #2', createdAt: Date.now(), updatedAt: '' })
        server.create('subscription', { id: uuid(), name: 'Netflix', price: 100, frequency: 'Monthly', description: 'Subscription #3', createdAt: Date.now(), updatedAt: '' })
        server.create('subscription', { id: uuid(), name: 'Netflix', price: 100, frequency: 'Monthly', description: 'Subscription #3', createdAt: Date.now(), updatedAt: '' })
        server.create('subscription', { id: uuid(), name: 'Netflix', price: 100, frequency: 'Monthly', description: 'Subscription #3', createdAt: Date.now(), updatedAt: '' })
        server.create('subscription', { id: uuid(), name: 'Netflix', price: 100, frequency: 'Monthly', description: 'Subscription #3', createdAt: Date.now(), updatedAt: '' })
        server.create('subscription', { id: uuid(), name: 'Netflix', price: 100, frequency: 'Monthly', description: 'Subscription #3', createdAt: Date.now(), updatedAt: '' })
        server.create('subscription', { id: uuid(), name: 'Netflix', price: 100, frequency: 'Monthly', description: 'Subscription #3', createdAt: Date.now(), updatedAt: '' })
        server.create('subscription', { id: uuid(), name: 'Netflix', price: 100, frequency: 'Monthly', description: 'Subscription #3', createdAt: Date.now(), updatedAt: '' })
        server.create('subscription', { id: uuid(), name: 'Netflix', price: 100, frequency: 'Monthly', description: 'Subscription #3', createdAt: Date.now(), updatedAt: '' })
        server.create('subscription', { id: uuid(), name: 'Netflix', price: 100, frequency: 'Monthly', description: 'Subscription #3', createdAt: Date.now(), updatedAt: '' })
        server.create('subscription', { id: uuid(), name: 'Netflix', price: 100, frequency: 'Monthly', description: 'Subscription #3', createdAt: Date.now(), updatedAt: '' })
        server.create('subscription', { id: uuid(), name: 'Netflix', price: 100, frequency: 'Monthly', description: 'Subscription #3', createdAt: Date.now(), updatedAt: '' })
        server.create('subscription', { id: uuid(), name: 'Netflix', price: 100, frequency: 'Monthly', description: 'Subscription #3', createdAt: Date.now(), updatedAt: '' })
        server.create('subscription', { id: uuid(), name: 'Netflix', price: 100, frequency: 'Monthly', description: 'Subscription #3', createdAt: Date.now(), updatedAt: '' })
        server.create('subscription', { id: uuid(), name: 'Netflix', price: 100, frequency: 'Monthly', description: 'Subscription #3', createdAt: Date.now(), updatedAt: '' })
        server.create('subscription', { id: uuid(), name: 'Netflix', price: 100, frequency: 'Monthly', description: 'Subscription #3', createdAt: Date.now(), updatedAt: '' })
        server.create('subscription', { id: uuid(), name: 'Netflix', price: 100, frequency: 'Monthly', description: 'Subscription #3', createdAt: Date.now(), updatedAt: '' })
        server.create('subscription', { id: uuid(), name: 'Netflix', price: 100, frequency: 'Monthly', description: 'Subscription #3', createdAt: Date.now(), updatedAt: '' })
        server.create('subscription', { id: uuid(), name: 'Netflix', price: 100, frequency: 'Monthly', description: 'Subscription #3', createdAt: Date.now(), updatedAt: '' })
        server.create('subscription', { id: uuid(), name: 'Netflix', price: 100, frequency: 'Monthly', description: 'Subscription #3', createdAt: Date.now(), updatedAt: '' })
        server.create('subscription', { id: uuid(), name: 'Netflix', price: 100, frequency: 'Monthly', description: 'Subscription #3', createdAt: Date.now(), updatedAt: '' })
    },
    routes() {
        this.namespace = 'api';

        this.get("/subscriptions", (schema, request) => {
            return schema.subscriptions.all();
        })

        this.get("/subscriptions/:id", (schema, request) => {
            let id = request.params.id;
            return schema.subscriptions.find(id);
        })

        this.post("/createSubscription", (schema, request) => {
            let attrs = JSON.parse(request.requestBody);
            attrs.createdAt = Date.now();
            return schema.subscriptions.create(attrs);
        })

        this.patch('/subscriptions/:id', (schema, request) => {
            let newAttrs = JSON.parse(request.requestBody);
            let id = request.params.id;
            let subscription = schema.subscriptions.find(id);
            newAttrs.updatedAt = Date.now();
       
            return subscription.update(newAttrs)
        })

        this.delete("/subscriptions/:id", (schema, request) => {
            let id = request.params.id;

            return schema.subscriptions.find(id).destroy();
        })
    },
})