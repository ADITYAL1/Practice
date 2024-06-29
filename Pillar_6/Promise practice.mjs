
import * as fs from 'node:fs';
let content = "hello my name is abhishek singh ";

function task(url) {
    console.log("Download start");

    setTimeout(() => {
        console.log("Download complete from", url);

        fs.writeFile("new.txt", content, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("new.txt is written successfully");
            }
        });
    }, 5000);
}

const url = "google.com";
task(url);
