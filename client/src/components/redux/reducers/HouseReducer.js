const houseState = {
    id: 0,
    adress: "",
    square_footage: 0,
    price: 0,
    house_type: "",
    num_beds: 0,
    num_baths: 0,
    air_cond: false,
    elevator: false,
    furnished: false
}

const HouseReducer = (state = houseState, action) => {
    switch (action.type) {
        case "HOUSE/UPDATE":
            return {
                ...action.payload
            }
        case "HOUSE/ZERO":
            return houseState

        default:
            return state;
    }
}

export default HouseReducer;