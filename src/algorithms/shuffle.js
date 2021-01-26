export const Shuffle =array =>{
    var i, j, tmp;
    for (i = array.length -1; i > 0; i--) {
    j = Math.floor(Math.random() * (i));
    tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  }
  return array;
}