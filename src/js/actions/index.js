  

const NEXT_IMAGE      = "NEXT_IMAGE";
const PREVIOUS_IMAGE  = "PREVIOUS_IMAGE";
const LAST_IMAGE      = "LAST_IMAGE";
const FIRST_IMAGE     = "FIRST_IMAGE";

export const nextImage = id => {
  return {
    type : NEXT_IMAGE,
    id: id ++;
  }
}

export const previousImage = id => {
  return {
    type : PREVIOUS_IMAGE,
    id: id--;
  }
}

export const lastImage = id => {
  return {
    type : LAST_IMAGE,
    id
  }
}

export const lastImage = id => {
  return {
    type : FIRST_IMAGE,
    id
  }
}

  // next(){
  //   let pos = this.props.position;
  //   let lastPosition = this.props.lastPosition;
  //   pos = (pos >= lastPosition)? lastPosition: pos+1;
  //   this.setState({ position: pos}, this.updatePosition);
  // }

  // goPrevious(){
  //   let pos = this.props.position;
  //   this.setState({ position:  (pos <= 0)? 0: pos-1}, this.updatePosition)
  // }

  // goLast(){
  //   this.setState({ position: 0}, this.updatePosition);
  // }

  // goFirst(){
  //   this.setState({ position: this.props.lastPosition}, this.updatePosition)
  // }

  // updatePosition(){
  //   this.func(this.state.position);
  // }



// let nextTodoId = 0
// export const addTodo = text => {
//   return {
//     type: 'ADD_TODO',
//     id: nextTodoId++,
//     text
//   }
// }

// export const removeTodo = id => {
//   return {
//     type: 'REMOVE_TODO',
//     id,
//   }
// }

// export const setVisibilityFilter = filter => {
//   return {
//     type: 'SET_VISIBILITY_FILTER',
//     filter
//   }
// }

// export const toggleTodo = id => {
//   return {
//     type: 'TOGGLE_TODO',
//     id
//   }
// }