import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import * as XLSX from 'xlsx';

const dataDirectory = 'test-data';

export function getTestData(fileType, fileName, sheetName = null) {

    const filePath = path.join(dataDirectory, fileName);

    if (fileType === 'json') {
        return readJson(filePath);
    }

    if (fileType === 'csv') {
        return readCsv(filePath);
    }

    if (fileType === 'excel') {
        return readExcel(filePath, sheetName);
    }

    throw new Error(`Unsupported test data file type: ${fileType}`);
}

function readJson(filePath) {

    const fileContent = fs.readFileSync(filePath, 'utf-8');

    return JSON.parse(fileContent);
}

function readCsv(filePath) {

    const fileContent = fs.readFileSync(filePath, 'utf-8');

    return parse(fileContent, {
        columns: true,
        skip_empty_lines: true,
        trim: true,
        delimiter: ','
    });
}

function readExcel(filePath, sheetName) {

    const workbook = XLSX.readFile(filePath);

    const worksheet = workbook.Sheets[sheetName];

    if (!worksheet) {
        throw new Error(
            `Sheet "${sheetName}" not found in ${filePath}`
        );
    }

    return XLSX.utils.sheet_to_json(worksheet);
}