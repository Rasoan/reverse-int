module.exports = function reverse (n) {
  let array = n.toString().split('');
  let strings = '';
  console.log(array);
  array.forEach( function f(element, index, arr)  {


      strings += (arr[arr.length -1 -index] != '-') && (arr[arr.length -1 -index] != '+') ? arr[arr.length -1 -index]: '';
  });
 
  //console.log(strings);

 return +strings;
}


