import path from 'path';
import fs from 'fs';

export const getInput = (day: number) => fs.readFileSync(path.join('input', `./day-${day.toString()}.txt`), 'utf-8');