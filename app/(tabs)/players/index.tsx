import PlayerCard from "@/components/PlayerCard";
import { initialPlayers } from "@/db/players";
import { useState } from "react";
import { Alert, FlatList } from "react-native";

const PlayersScreen = () => {
    const [players,setPlayers] = useState(initialPlayers);

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