const storeName = 'memories';
const dbName = 'test';

let db : IDBDatabase;
const request = indexedDB.open(dbName, 1);

request.onerror = (event: Event) => {
    console.error('Error opening database:', (event.target as IDBRequest).error);
};

request.onsuccess = (event) => {
    db = (event.target as IDBRequest).result;
    getValueFromMemory();
};

request.onupgradeneeded = (event : IDBVersionChangeEvent) => {
    const db = (event.target as IDBRequest).result as IDBDatabase;

    db.createObjectStore(storeName, {keyPath: 'id'});
};

export const dbSize = async (db, dbName) => {
    return new Promise((resolve, reject) => {

            const tx = db.transaction([dbName], 'readonly');
            const store = tx.objectStore(storeName);
            const cursorReq = store.openCursor();
            let count = 0; 
            let size = 0;
            cursorReq.onsuccess = function(e) {
                const cursor = cursorReq.result;
                if (cursor) {
                    count++;
                    size = size + cursor.value.blob.size;
                    cursor.continue();
                    console.log("Count: ", count);

                }
            };
            cursorReq.onerror = function(e) {
                reject(e);
            };  
            tx.oncomplete = function(e) {              
                resolve({
                    count: count,
                    size: size,
                   
                });
        };
        tx.onabort = function(e) {
            reject(e);
        };
        tx.onerror = function(e) {
            reject(e);
        };
    });     
};

var maxKey = 0;
export function getSize() {
    const transaction = db.transaction(storeName, "readonly");
    var objectStore = transaction.objectStore(storeName);
    const countRequest = objectStore.count();
    countRequest.onsuccess = () => {
        maxKey = countRequest.result;
        console.log(countRequest.result);
        return countRequest.result;
    }
}

function getRandomKey() {
    const min = 1;
    const max = maxKey;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export function getValueFromMemory(): Promise<string> {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, "readonly");
        const store = transaction.objectStore(storeName);
        // const key = 1;
        const key = getRandomKey();
        const getRequest = store.get(key);


        getRequest.onsuccess = (event) => {
            const value = (event.target as IDBRequest).result;
            if (value) {
                console.log("Value retrieved: ", value);
                console.log("Memory: ", value.name);
                resolve(JSON.stringify(value.name));
            } else {
                console.log("No value found for key: ", key);
                resolve("No value found for key: " + key);
            }
        };
        getRequest.onerror = (event) => {
            console.error("Error getting value: ", event);
        };


    });
}
