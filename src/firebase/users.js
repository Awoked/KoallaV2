import { addDoc, collection, getDocs, deleteDoc, updateDoc, doc, getDoc } from 'firebase/firestore/lite';
import { db } from "@/firebase/initFirebase";

const usersCol = collection(db, 'users');

async function get(id) {
    try {
        if (id) {
            const docRef = doc(db, "movies", id);
            const docSnap = await getDoc(docRef);

            return docSnap.data();
        } else {
            const movieSnapshot = await getDocs(usersCol);
            const userList = movieSnapshot.docs.map(doc => {
                let data = doc.data();

                return data;
            });
            return userList;
        }


    } catch (error) {
        throw new Error('Hata');
    }
}

async function add(userData) {

    try {

        const docRef = await addDoc(usersCol, userData);
        //id'yi güncellemek için
        update(docRef.id, { id: docRef.id })
    } catch (error) {
        throw new Error('Hata');
    }
}

async function remove(id) {
    try {
        const docRef = doc(usersCol, id);
        await deleteDoc(docRef);
    } catch (error) {
        throw new Error("Hata")
    }
}

async function update(id, newData) {
    try {
        const docRef = doc(usersCol, id);
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