import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as bodyParser from "body-parser";
import * as cors from "cors";

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

const app = express();
app.use(bodyParser.json());

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 
  }
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send("HOLA");
});

app.get('/warm', (req, res) => {
    res.send("klk");
});

app.post('/product', async (req, res) => {
    const key = req.body["codigo"].toString();
    await db.collection('products').doc(key).set(req.body)
    .then(data => {
        res.send(key)
    })
    .catch(error => {
        res.send( "Error adding Product." + error)
    })
})

app.route('/products')
    .post((req, res) => {
        req.body.forEach(async product => {
            const key = product["codigo"].toString();
            await db.collection('products').doc(key).set(product)
            .then(data => {
                res.send(product)
            })
            .catch(error => {
                res.send( "Error adding Product." + error)
            })
        })
    })
    .get(async (req, res) => {
        db.collection('products').get()
        .then(data => {
            let products = []
            data.forEach(doc => products.push(doc.data()))
            if (products.length) {
                res.status(200).json(products)
            } else {
                res.status(404).json({detail: 'No records found'})
            }
        })
        .catch(error => {
            console.log("Error getting Products.")
        })
    });

app.route('/products/:id')
    .get(async (req, res) => {
        var docRef = db.collection("products").doc(req.params.id);
        docRef.get().then((doc) => {
            if (doc.exists) {
                return res.status(200).json(doc.data());
            } else {
                return res.status(400).json({"message":"Product ID not found."});
            }
        }).catch((error) => {
            return res.status(400).json({"message":"Unable to connect to Firestore."});
        });
    })
    .put(async (req, res) => {
        res.send('Update the book')
    });

exports.webApi = functions.https.onRequest(app);