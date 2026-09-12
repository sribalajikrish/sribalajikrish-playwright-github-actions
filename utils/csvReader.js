// import fs from 'fs';
// import { parse } from 'csv-parse/sync';

// export function readCsv(filePath) {

//     const fileContent = fs.readFileSync(filePath, 'utf-8');

//     return parse(fileContent, {
//         columns: true,
//         skip_empty_lines: true,
//         trim: true,
//         delimiter: ','
//     });
// }

import fs from 'fs';
import { parse } from 'csv-parse/sync';

export function readCsv(filePath) {

    const fileContent = fs.readFileSync(filePath, 'utf-8');

    console.log('CSV CONTENT:');
    console.log(JSON.stringify(fileContent));

    const data = parse(fileContent, {
        columns: true,
        skip_empty_lines: true,
        trim: true,
        delimiter: ','
    });

    console.log('PARSED DATA:');
    console.log(data);

    return data;
}