import { addDoc, collection, getDocs, deleteDoc, updateDoc, doc, getDoc } from 'firebase/firestore/lite';
import { db } from "@/firebase/initFirebase";

const moviesCol = collection(db, 'movies');

async function get(id) {
    try {
        if (id) {
            const docRef = doc(db, "movies", id);
            const docSnap = await getDoc(docRef);

            return docSnap.data();
        } else {
            const movieSnapshot = await getDocs(moviesCol);
            const movieList = movieSnapshot.docs.map(doc => {
                let data = doc.data();

                return data;
            });
            return movieList;
        }


    } catch (error) {
        throw new Error(error);
    }
}

async function add(movieData) {

    try {

        const docRef = await addDoc(moviesCol, movieData);
        //id'yi güncellemek için
        update(docRef.id, { id: docRef.id })
    } catch (error) {
        throw new Error('Hata');
    }
}

async function remove(id) {
    try {
        const docRef = doc(moviesCol, id);
        await deleteDoc(docRef);
    } catch (error) {
        throw new Error("Hata")
    }
}

async function update(id, newData) {
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