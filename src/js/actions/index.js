  


export const dataFetched = data => {
  return {
    type: "DATA_FETCHED",
    data
  }
}


export const filterVehicle = (vehicle) =>{
    return {
        type: "FILTER_VEHICLE",
        filter: vehicle
    }
}

export const filterVehicleBrand = (brand) =>{
    return {
        type: "FILTER_VEHICLE_BRAND",
        filter: brand
    }
}

export const filterVehicleColor = (color) =>{
    return {
        type: "FILTER_VEHICLE_COLOR",
        filter: color
    }
}



      // case "FILTER_VEHICLE":
      //   return filterByType("type",data);

      // case "FILTER_VEHICLE_BRAND":
      //  return filterByType("brand",data);

      // case "FILTER_VEHICLE_COLOR":


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