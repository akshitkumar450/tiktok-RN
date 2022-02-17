import { View, Text, ScrollView, FlatList, Dimensions } from "react-native";
import React, { useRef } from "react";
import VideoPost from "../components/VideoPost";
import posts from "../assets/posts";
import tw from "tailwind-react-native-classnames";
const HomeScreen = () => {
  // height of a single video
  const height = Dimensions.get("window").height - 80;
  const viewConfigRef = useRef({
    itemVisiblePercentThreshold: 50,
    // minimumViewTime: 300, //time
  });
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={posts}
        snapToAlignment={"start"}
        decelerationRate={"fast"} //to move to next speed
        snapToInterval={height} //for autosnap
        viewabilityConfig={viewConfigRef.current}
        renderItem={({ item }) => (
          <VideoPost
            videoUri={item.videoUri}
            description={item.description}
            comments={item.comments}
            likes={item.likes}
            shares={item.shares}
            songName={item.songName}
            userName={item.user.username}
            imageUri={item.user.imageUri}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;
