import PlayerCard from "@/components/PlayerCard";
import { initialPlayers } from "@/db/players";
import { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";

type PlayerPositionFilter = {
  label: PlayerPositionLabel;
  value: PlayerPosition;
  active: boolean;
  onClick: () => void;
};

const PlayersScreen = () => {
    const [players,setPlayers] = useState(initialPlayers);
    const [filters, setFilters] = useState<PlayerPositionFilter[]>([
    { label: "GK", value: "Goalkeeper", active: false, onClick: () => toggleFilter("Goalkeeper") },
    { label: "DF", value: "Defender", active: false, onClick: () => toggleFilter("Defender") },
    { label: "MF", value: "Midfielder", active: false, onClick: () => toggleFilter("Midfielder") },
    { label: "FW", value: "Forward", active: false, onClick: () => toggleFilter("Forward") },
  ]);

  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>(players);

  const toggleFilter = (position: PlayerPosition) => {
    setFilters(previousFilters =>
      previousFilters.map(filter =>
        filter.value === position ? { ...filter, active: !filter.active } : filter
      )
    );
  };

  useEffect(() => {
    if (filters.every(filter => !filter.active)) {
      setFilteredPlayers(players);
      return;
    }

    setFilteredPlayers(players.filter(player => filters.find(filter => filter.active && filter.value === player.position)));
  }, [players, filters]);

    const edit = (player: Player) => console.log(`Editing ${player.name} (id: ${player.id})`);

    const remove = (player: Player) => {
        Alert.alert('Remove Player',`Are you sure you want to remove ${player.name}?`,[
            {text: 'cancel',
                style: 'cancel',
            },{
                text: 'Remove',
                onPress: () => setPlayers(previousPlayers => previousPlayers.filter(p => p.id != player.id)),
            }
        ])
    }


    return (
        <FlatList data={players} keyExtractor={item => item.id.toString()} renderItem={({item}) => <PlayerCard player={item} edit={() => edit(item)} remove={() => remove(item)}/>}
        />
    )
}

export default PlayersScreen;