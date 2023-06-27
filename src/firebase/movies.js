import { addDoc, collection, getDocs, deleteDoc, updateDoc, doc } from 'firebase/firestore/lite';
import { db } from "@/firebase/initFirebase";

const moviesCol = collection(db, 'movies');

async function get() {
    const movieSnapshot = await getDocs(moviesCol);
    const movieList = movieSnapshot.docs.map(doc => {
        let data = doc.data();
        data.id = doc.id;

        return data
    });
    return movieList;
}

async function add(db, movieData) {

    const docRef = await addDoc(moviesCol, movieData);
    //id'yi güncellemek için
    update(db, docRef.id, {id: docRef.id})
}

async function remove(db, id) {
    try {
        const docRef = doc(moviesCol, id);
        await deleteDoc(docRef);
    } catch (error) {
        throw new Error("Hata")
    }
}

async function update(db, id, newData) {
    try {
        const docRef = doc(moviesCol, id);
        await updateDoc(docRef, newData);
    } catch (error) {
        throw new Error('Hata');
    }
}

export {
    get,
    add,
    remove,
    update
};