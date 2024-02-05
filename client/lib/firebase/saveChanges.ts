import { db } from "./app";

const saveChangesPerfil = async (id: string, data: any) => {
    try {
        await db.collection('users').doc(id).update(data);
    } catch (error) {
        console.error('Error updating document: ', error);
    }
}