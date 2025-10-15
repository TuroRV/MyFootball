import TeamCard from "@/components/TeamCard";
import { initialTeams } from "@/db/teams";
import { useState } from "react";
import { Alert, FlatList } from "react-native";

const TeamsScreen = () => {
    const [teams,setTeams] = useState(initialTeams);

    const edit = (team: Team) => console.log(`Editing ${team.name} (id: ${team.id})`);

    const remove = (team: Team) => {
        Alert.alert('Remove Team',`Are you sure you want to remove ${team.name}?`,[
            {text: 'cancel',
                style: 'cancel',
            },{
                text: 'Remove',
                onPress: () => setTeams(previousTeams => previousTeams.filter(t => t.id != team.id)),
            }
        ])
    }


    return (
        <FlatList data={teams} keyExtractor={item => item.id.toString()} renderItem={({item}) => <TeamCard team={item} edit={() => edit(item)} remove={() => remove(item)}/>}
        />
    )
}

export default TeamsScreen;