import IndexedDb from './indexedDb';
import React, {useEffect, useState} from 'react';

export const Test = () => {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    const runIndexDb = async () => {
      const indexedDb = new IndexedDb('tulip');
      await indexedDb.createObjectStore(['memories']);

      // Add data to IndexedDB
      // await indexedDb.putValue('memories', { name: 'Don\'t judge each day by the harvest you reap but by the seeds that you plant.'});
      // await indexedDb.putValue('books', { name: 'Wicked' });
      // await indexedDb.putBulkValue('books', [
      //   { name: 'Little Women' },
      //   { name: 'Kafka on the Shore' },
      //   { name: 'This is the End' },
      //   { name: 'As the World Caves In' },
      // ]);

      // Re-fetch all books after adding new ones
      await fetchMemories(indexedDb);

      // Fetch single book by ID
      const memory = await indexedDb.getValue('memories', 1);
      console.log('Single memory:', memory);

      // Fetch all books after insertions
      const allMemories = await indexedDb.getAllValue('memories');
      console.log('All Memories after Insertions:', allMemories);

      // Delete a book by ID and re-fetch
      await indexedDb.deleteValue('memories', 1); // Deletes book with ID 1
      await fetchMemories(indexedDb); // Re-fetch the updated list
    };

    const fetchMemories = async (indexedDb: IndexedDb) => {
      const allMemories = await indexedDb.getAllValue('memories');
      setBooks(allMemories); // Update state with the fetched books
    };

    runIndexDb();
  }, []);

  const getMemory = async() =>{
    const indexedDb = new IndexedDb('tulip');
    const mem = indexedDb.getValue('memories', 1);
    console.log(mem);
    return mem;
    };

  
  return (<React.Fragment></React.Fragment>)

}

export default Test;