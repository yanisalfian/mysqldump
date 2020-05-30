import * as fs from 'fs';
import * as sevenBin from '7zip-bin';
const Seven = require('node-7z');

function compress7z(filename: string, password: string | null): Promise<void> {
    return new Promise((resolve, reject) => {
        const pathTo7zip = sevenBin.path7za;
        const mystream = Seven.add(`${filename}.7z`, `${filename}`, {
            password,
            $bin: pathTo7zip,
        });

        mystream.on('end', function() {
            //delete file
            try {
                fs.unlinkSync(filename);
            } catch (err) {
                //nothing
            }
            resolve();
        });

        mystream.on('error', () => {
            reject();
        });
    });
}
export { compress7z };
