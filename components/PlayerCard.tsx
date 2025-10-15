import { getTeamById } from "@/db/teams";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type PlayerCardProps = {
    player: Player;
    edit: () => void;
    remove: () => void;
};

const PlayerCard: React.FC<PlayerCardProps> = ({player, edit,remove}) => {
    const photo = player.photo ? {uri:player.photo} : require('@/assets/images/default-player-photo.png');
    const team = player.teamId ? getTeamById(player.teamId) : null;

    return(
    <View style={styles.container}> 
    <Image style={styles.photo} source={photo}/>
    <View style={styles.detailsContainer}>
        <Text style={styles.name}>{player.name}</Text>
        <Text style={styles.position}>{player.position}</Text>
        {team && <Text style={styles.teamName}>{team.name}</Text>}
        <View style={styles.iconContainer}>
            <Pressable onPress={edit}>
                {
                ({ pressed }) => <FontAwesome name='pencil' size={24} color='black' style={{opacity: pressed ? 0.5 : 1.0}}/>
                }
            </Pressable>
            <Pressable onPress={remove}>
                {
                ({ pressed }) => <FontAwesome name='trash' size={24} color='black' style={{opacity: pressed ? 0.5 : 1.0}}/>
                }
            </Pressable>
        </View>


    </View>
    </View>
    )
}
    const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    margin: 10,
    backgroundColor: "#ccc",
    borderRadius: 10,
  },
  photo: {
    width: 100,
    height: 100,
  },
  detailsContainer: {
    marginHorizontal: 20,
    justifyContent: "center",
    width: "65%",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  teamName: {
    fontSize: 16,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 20,
    marginTop: 10,
  },
  position: {
    fontSize: 16,
  }
});

export default PlayerCard;

