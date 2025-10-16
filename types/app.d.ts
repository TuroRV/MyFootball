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

type PlayerPosition = 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Forward';
type PlayerPositionLabel = 'GK' | 'DF' | 'MF' | 'FW';

interface Player {
    id:number;
    name: String;
    position: PlayerPosition;
    teamId: Team['id'];
    photo:String;
}