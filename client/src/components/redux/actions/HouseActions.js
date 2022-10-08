export const HouseUpdate = (house)=> {
        return {
            type: 'HOUSE/UPDATE',
            payload: house
        };
};

export const Zero = () => {
    return {
        type: "HOUSE/ZERO"
    }
} 