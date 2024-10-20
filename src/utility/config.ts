import * as fs from 'fs';
import { Inputs } from 'models/inputs';

const CONFIG_FILE = 'config.json';
const ENCODING = 'utf8';

export const readConfig = (): Inputs => {
    const configData = fs.readFileSync(CONFIG_FILE, ENCODING);
    return JSON.parse(configData);
}