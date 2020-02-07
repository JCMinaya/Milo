import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as bodyParser from "body-parser";

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("HOLA");
});

app.get('/warm', (req, res) => {
    res.send("klk");
});

app.post('/product', async (req, res) => {
    const productRef = await db.collection('products').add(req.body);
    const product = await productRef.get();
    
    res.json({
        id: productRef.id,
        data: product.data()
    });
    
});

app.route('/products/:id')
    .get(async (req, res) => {
        
    })
    .put(async (req, res) => {
        res.send('Update the book')
    })

exports.webApi = functions.https.onRequest(app);