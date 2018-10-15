/**
Array Injector
--------------
Implementasikan function `arrayInjector` untuk menyisipkan `secondData` ke `firstData`.
Diberikan juga parameter tambahan yaitu `index` yang akan digunakan untuk menandakan bahwa
`secondData` akan dimasukkan mulai ke `index`.

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!

Contoh:
  - input: [8, 'foobar', 'foobaz'], 1, ['bar', 'baz']
    output: [8, 'bar', 'baz', 'foobar', 'foobaz']
*/

function arrayInjector (firstData, index, secondData) {
  // Code disini
  let result = []

  for(let i = 0; i < firstData.length; i++) {
    if(i === index) {
      for(let j = 0; j < secondData.length; j++) {
        result.push(secondData[j])
      } 
    } else {
      result.push(firstData[i])
    }
  }
  result.push(firstData[firstData.length-1])
  return result
}

console.log(arrayInjector([1, 5, 6], 1, [2, 3, 4]));
// [1, 2, 3, 4, 5, 6, 7]

console.log(arrayInjector([10, 20, 70], 2, [30, 40, 50, 60]));
// [10, 20, 30, 40, 50, 60, 70]

console.log(arrayInjector(['Dimitri', 'Alexei', 'Alexander', 'Alisa'], 3, ['Dragunov']));
// ['Dimitri', 'Alexei', 'Alexander', 'Dragunov', 'Alisa']

//PSEUDOCODE
// FUNCTION 'arrayInjector' WITH PARAMETER 'firstData' AND 'index' AND 'secondData' :

// STORE 'result' with empty arrayInjector

// FOR STORE 'i' with 0; WHILE 'i' < 'firstData' LENGTH; 'i' ADD by 1
//   IF 'i' equals 'index'
//     FOR STORE 'j' with 0; WHILE 'j' < 'secondData' LENGTH; 'j' ADD by 1
//       STORE 'result' with 'secondData' INDEX 'j'
//   ELSE 
//     STORE 'result' with 'firstData' INDEX 'i'

//     RETURN 'result'

// END FUNCTION