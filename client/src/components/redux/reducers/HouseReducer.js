const houseState = {
    id: 0,
    adress: "",
    square_footage: 1,
    image_url: "",
    price: 1,
    house_type: "",
    num_beds: 1,
    num_baths: 1,
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