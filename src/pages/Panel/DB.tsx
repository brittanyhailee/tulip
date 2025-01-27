import IndexedDb from './indexedDb';
import React, {useEffect, useState} from 'react';

export const Test = () => {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    const runIndexDb = async () => {
      const indexedDb = new IndexedDb('test');
      await indexedDb.createObjectStore(['books', 'students']);

      // Add data to IndexedDB
      await indexedDb.putValue('books', { name: 'Wicked' });
      await indexedDb.putBulkValue('books', [
        { name: 'Little Women' },
        { name: 'Kafka on the Shore' },
        { name: 'This is the End' },
        { name: 'As the World Caves In' },
      ]);

      // Re-fetch all books after adding new ones
      await fetchBooks(indexedDb);

      // Fetch single book by ID
      const book = await indexedDb.getValue('books', 1);
      console.log('Single Book:', book);

      // Fetch all books after insertions
      const allBooks = await indexedDb.getAllValue('books');
      console.log('All Books after Insertions:', allBooks);

      // Delete a book by ID and re-fetch
      await indexedDb.deleteValue('books', 1); // Deletes book with ID 1
      await fetchBooks(indexedDb); // Re-fetch the updated list
    };

    const fetchBooks = async (indexedDb: IndexedDb) => {
      const allBooks = await indexedDb.getAllValue('books');
      setBooks(allBooks); // Update state with the fetched books
    };

    runIndexDb();
  }, []);
  return (<React.Fragment></React.Fragment>)

}

export default Test;