const storeName = 'memories';
const dbName = 'test';
const key = 1;
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

export function getValueFromMemory() {
    const transaction = db.transaction(storeName, "readonly");
    const store = transaction.objectStore(storeName);
    const getRequest = store.get(key);

    getRequest.onsuccess = (event) => {
        const value = (event.target as IDBRequest).result;
        if (value) {
            console.log("Value retrieved: ", value);
        } else {
            console.log("No value found for key: ", key);
        }
    };

    getRequest.onerror = (event) => {
        console.error("Error getting value: ", event);
    };
}