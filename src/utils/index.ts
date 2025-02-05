import { writeFileSync } from 'fs';

export function saveJsonToFile(data:any, filename:string) {
  writeFileSync(filename, JSON.stringify(data, null, 2), 'utf8');
  console.log(`File saved as ${filename}`);
}


export function starFormat(num:number) {
    return Math.round(num * 10) / 10;
}
  