import {useState, useEffect} from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config'

const useStorage = ({file, productType, productPrice}) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    useEffect(() => {
        const storageRef = projectStorage.ref(file.name).child('images');
        const collectionRef = projectFirestore.collection(productType + '-' + productPrice);
        storageRef.put(file).on('state_change', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        },(err) => {
            setError(err);
        },async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            await collectionRef.add({url, createdAt, productType, productPrice});
            setUrl(url);
        })
    }, [file]);

    return {progress, url, error}
}

export default useStorage;