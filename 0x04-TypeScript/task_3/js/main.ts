<reference path="crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from 'crud';

// Create a RowElement object
const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};

// Insert a row and get the new row ID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`New Row ID: ${newRowID}`);

// Update the row with an age field
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);

