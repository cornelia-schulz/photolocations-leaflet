
const getLocations = () => {
    console.log(locations, 'hello')
    return (locations)
}

const getLocationsById = ({ locationId }) => {
    return Promise.resolve(location.find(l => l.id === locationId))
}

const createLocation = ({ location }) => {
    const newId = locations.length === 0 ? 1: locations[locations.length-1].id + 1
    locations = [ ...locations, { ...location, id: newId }]
    return Promise.resolve('success')
}

module.exports = {
    Query: {
        locations: getLocations,
        location: async (_, { id }) => getLocationsById({ productId: id })
    },
    Mutation: {
        createLocation: async (_, { location }) => createLocation({ location })
    }
}

const locations = [
    {
        id: 1,
        title: "Westhaven",
        label: "Westhaven",
        lat: -36.839914,
        lng: 174.747697,
        info_title: "Great views towards the Harbour Bridge",
        info: "Westhaven Marina is located on the western edge of Auckland Central Business District. It\'s immediately recognisable as one of Auckland\'s famous icons and it\'s the heart of boating in Auckland. It’s one of the most idyllic places in Auckland to ride a bike, walk a dog, or picnic and home to several excellent cafes and restaurants.",
        type: "image"
    },
    {
        id: 2,
        title: "Sumner Road",
        label: "Porthills",
        lat: -43.594600785606914,
        lng: 172.7487869555122,
        info_title: "Beautiful views over the Bays",
        info: "Beautiful views over the Bays",
        type: "image"
    }
]