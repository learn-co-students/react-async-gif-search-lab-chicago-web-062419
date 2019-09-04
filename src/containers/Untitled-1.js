function selectionSort(arr) {
      let min    
      for(let i = 0; i < array.length; i++){
        if(i == 0){
          min = array[i]
        }
        if(array[i] < min){
          min = array[i]
        }
      }
      let index = array.indexOf(min)
      array.splice(index, 1);
      if(array.length > 0){
        selectionSort(array)
      }
      return sortedArray
  }