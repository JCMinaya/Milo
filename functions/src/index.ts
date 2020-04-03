import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { singlePost, getCollection, multiplePosts, getDocument, singleDelete, mergeData } from './controllers'
import * as express from 'express';
import * as bodyParser from "body-parser";
import * as cors from "cors";

admin.initializeApp(functions.config().firebase);
export const db = admin.firestore();

export const app = express();
app.use(bodyParser.json());

var whitelist = ['https://milo-fa1b1.firebaseapp.com', 'http://localhost:4200']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use('*', cors(corsOptions));

    /*
     *   PRODUCTS 
     */

app.post('/product', async (req, res) => {
    singlePost(req, res, "id", "products")
})

app.post('/productPrices', async (req, res) => {
    mergeData(req, res, "id", "products", "tipos")
})

app.route('/products')
    .post((req, res) => {
        multiplePosts(req, res, "id", "products")
    })
    .get((req, res) => {
        getCollection(res, "products");
    });

app.route('/products/:id')
    .get((req, res) => {
        getDocument(req, res, "products")
    })
    .put((req, res) => {
        singlePost(req, res, "id", "products")
    })
    .delete((req, res) => {
        singleDelete(req, res, "id", "products");
    });

    /*
     *   CUSTOMERS 
     */

app.route('/customers')
    .post((req, res) => {
        multiplePosts(req, res, "id", "customers");
    })
    .get((req, res) => {
        getCollection(res, "customers");
    });

app.post('/customer', async (req, res) => {
    singlePost(req, res, "id", "customers")
    })

app.route('/customers/:id')
    .get((req, res) => {
        getDocument(req, res, "customers")
    })
    .put((req, res) => {
        singlePost(req, res, "id", "customers")
    })
    .delete((req, res) => {
        singleDelete(req, res, "id", "customers");
    });

    /*
     *   ORDERS 
     */

app.post('/order', async (req, res) => {
    singlePost(req, res, "documento", "orders")
})

app.route('/orders')
    .post((req, res) => {
        multiplePosts(req, res, "documento", "orders")
    })
    .get((req, res) => {
        getCollection(res, "orders");
    });

app.route('/orders/:id')
    .get((req, res) => {
        getDocument(req, res, "orders")
    })
    .put((req, res) => {
        res.send('Update the book')
    });

app.post('/orderDetails', async (req, res) => {
    // mergeData(req, res, "documento", "orders", "lineas")
    multiplePosts(req, res, "documento", "orderDetails")
})

exports.webApi = functions.https.onRequest(app);