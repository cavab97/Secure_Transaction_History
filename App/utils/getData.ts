import {localStorage} from './localStorage';

export async function getData({key}: any) {
  console.log(key);
  return new Promise(async (resolve, reject) => {
    try {
      let value = await localStorage.getItem(key);
      value = JSON.parse(value);
      console.log('up');
      console.log(value);
      resolve({value});
    } catch (e) {
      reject({error});
      console.log('center');
    }
    console.log('down');
  });
}
