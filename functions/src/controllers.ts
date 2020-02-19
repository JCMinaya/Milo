import {Request, Response} from 'express';
import {db} from './index'



export function getDocument(req: Request, res: Response, collection:string){
    var docRef = db.collection(collection).doc(req.params.id);
    docRef.get().then((doc) => {
        if (doc.exists) {
            return res.status(200).json(doc.data());
        } else {
            return res.status(400).json({"message":"Product ID not found."});
        }
    }).catch((error) => {
        return res.status(400).json({"message":"Unable to connect to Firestore."});
    });
}

export function singlePost(req:Request, res: Response, id:string, collection:string){
    const key = req.body[id].toString();
    db.collection(collection).doc(key).set(req.body)
    .then(data => {
        res.send(key)
    })
    .catch(error => {
        res.send( "Error adding Product." + error)
    })
}

export function getCollection(res: Response, collection:string){
    db.collection(collection).get()
    .then(data => {
        let docList = []
        data.forEach(doc => docList.push(doc.data()))
        if (docList.length) {
            res.status(200).json(docList)
        } else {
            res.status(404).json({detail: 'No records found'})
        }
    })
    .catch(error => {
        console.log("Error getting " + collection+'.')
    })
}

export function multiplePosts(req:Request, res: Response, id:string, collection:string){
    req.body.forEach(async doc => {
        const key = doc[id].toString();
        await db.collection(collection).doc(key).set(doc)
        .then(data => {
            res.send(data)
        })
        .catch(error => {
            res.send( "Error adding data." + error)
        })
    })
}