const locations = [
    {
        id: 1,
        title: "test location",
        label: "test label",
        lat: 123,
        lng: 45,
        info_title: "test info title",
        info: "test info 1"
    },
    {
        id: 2,
        title: "test location",
        label: "test label",
        lat: 123,
        lng: 45,
        info_title: "test info title",
        info: "test info 2"
    }
]

const sayHello = () => {
    console.log('hello from hello')
    return (hello = "Hello from function world")
}

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
        location: async (_, { id }) => getLocationsById({ productId: id }),
        hello: (root, args, context) => { return "Hello, world!"},
        hello1: () => sayHello
    },
    Mutation: {
        createLocation: async (_, { location }) => createLocation({ location })
    }
}