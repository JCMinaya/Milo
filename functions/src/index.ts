import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { singlePost, getCollection, multiplePosts, getDocument } from './controllers'
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

app.post('/product', async (req, res) => {
    singlePost(req, res, "id", "products")
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
        res.send('Update the book')
    });

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

exports.webApi = functions.https.onRequest(app);