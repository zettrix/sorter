class Sorter {
  constructor() {
    // your implementation
    this.arr = [];

    this.sorting = function (a,b){
      return a - b;
    }
  }

  add(element) {
    // your implementation
    this.arr.push(element)

    return this.arr
  }

  at(index) {
    // your implementation
    return this.arr[index]
  }

  get length() {
    // your implementation
    return this.arr.length
  }

  toArray() {
    // your implementation
    return this.arr
  }

  sort(indices) {
    // your implementation
    var newArr = [],
        length = indices.length;
    indices.sort(function(a,b){return a- b});
    for(var i = 0; i < length; i++){
      newArr.push(this.arr[indices[i]]);
    }
    newArr.sort(this.sorting);

    for(var i = 0; i < length; i++){
      this.arr[indices[i]] = newArr[i]; 
    }
    
    return this.arr;
  }

  setComparator(compareFunction) {
    // your implementation
    this.sorting = compareFunction;
  }
}

module.exports = Sorter;
