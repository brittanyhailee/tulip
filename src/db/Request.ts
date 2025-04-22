const storeName = 'memories';
const dbName = 'tulip';

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


var maxKey = 0;
let keysArray: string | any[] = []
var randomKeyTest = 0;

async function getSize() {
    const transaction = db.transaction(storeName, "readonly");
    var objectStore = transaction.objectStore(storeName);

    // Testing
    const getAllKeysRequest = objectStore.getAllKeys();
    getAllKeysRequest.onsuccess = () => {
        keysArray = getAllKeysRequest.result;
        console.log("keysArray: " + keysArray);
    }
    // End of test

    const countRequest = objectStore.count();
    countRequest.onsuccess = () => {
        maxKey = countRequest.result;
        console.log(countRequest.result);

        return countRequest.result;
    }
}

function getRandomKey() {

    const min = 1;
    
    if (keysArray.length === 1) {
        return keysArray[0]
    }

    // Testing
    const max = keysArray.length;
    // const key = keysArray[randomKeyTest];
    // End of Testing

    const setRandomKey =  Math.floor(Math.random() * max);
    return keysArray[setRandomKey];
    
}


export function getValueFromMemory(): Promise<string> {
    return new Promise((resolve, reject) => {
        getSize();
        var key = getRandomKey();
        if (key != undefined) {
            
            const transaction = db.transaction(storeName, "readonly");
            const store = transaction.objectStore(storeName);
        
            console.log("the key we are getting is " + key);
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
        } else {
            console.log('Key is currently undefined');
        }


    });
}
