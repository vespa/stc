export const dataFetched = data => {
  return {
    type: "DATA_FETCHED",
    data : data
  }
}
export const filterVehicle = (vehicle) =>{
    return {
        type: "FILTER_VEHICLE",
        filter: vehicle,
        field:"type"
    }
}

export const filterVehicleBrand = (brand) =>{
    return {
        type: "FILTER_VEHICLE_BRAND",
        filter: brand,
        field: "brand"
    }
}

export const filterVehicleColor = (color) =>{
    return {
        type: "FILTER_VEHICLE_COLOR",
        filter: color,
        field: "colors"
    }
}

export const filterRemove = () =>{
    return {
        type: "FILTER_REMOVE",
        filter: "0"
    }
}