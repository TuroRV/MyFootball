interface Team {
    id: number;
    name: String;
    location: {
        city: String;
        country: String;
    }
    stadium: {
        name: String;
        capacity: number;
    }
    logo: String;
}