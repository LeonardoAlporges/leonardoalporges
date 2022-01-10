import * as FileSystem from 'expo-file-system';
import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase('myDatabaseName.db');

async function openDatabase() {
 await FileSystem.downloadAsync(
  'https://firebasestorage.googleapis.com/v0/b/hommy-d0890.appspot.com/o/myDatabaseName.db?alt=media&token=6c47833f-a248-4c7d-8bba-911a2346096d',
  FileSystem.documentDirectory + 'SQLite/myDatabaseName.db'
 );

}

export default db;