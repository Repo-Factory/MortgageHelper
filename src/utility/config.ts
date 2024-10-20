import * as fs from 'fs';

import { Mortgage } from 'models/mortage';

const CONFIG_FILE = 'config.json';
const ENCODING = 'utf8';

export const readConfig = (): Mortgage => {
    const configData = fs.readFileSync(CONFIG_FILE, ENCODING);
    return JSON.parse(configData);
}