import { View, Text, Dimensions, Pressable, Image } from "react-native";
import React, { useRef, useState } from "react";
import tw from "tailwind-react-native-classnames";
import { Video } from "expo-av";
import { AntDesign, FontAwesome5, FontAwesome } from "@expo/vector-icons";

const VideoPost = ({
  videoUri,
  description,
  likes,
  comments,
  shares,
  songName,
  userName,
  imageUri,
}) => {
  const videoRef = useRef();
  const [status, setStatus] = useState({});
  return (
    <View style={[tw`w-full`, { height: Dimensions.get("screen").height }]}>
      <Pressable
        onPress={() =>
          status.isPlaying
            ? videoRef.current.pauseAsync()
            : videoRef.current.playAsync()
        }>
        <Video
          ref={videoRef}
          style={[tw` w-full `, { height: Dimensions.get("screen").height }]}
          source={{
            uri: videoUri,
          }}
          isLooping
          resizeMode="cover"
          onPlaybackStatusUpdate={(status) => setStatus(status)}
        />
      </Pressable>

      {/**bottom text */}
      <View
        style={tw`flex-row items-end justify-between absolute left-0 right-0 mx-2 bottom-10`}>
        <View>
          <Text style={tw`text-white`}>{userName}</Text>
          <Text style={tw`text-white my-2`}>{description}</Text>
          <View style={tw`flex-row items-center mt-3`}>
            <FontAwesome name="music" size={24} color="white" />
            <Text style={tw`text-white ml-5`}>{songName}</Text>
          </View>
        </View>
        <View style={tw`mr-2`}>
          <FontAwesome5 name="compact-disc" size={24} color="white" />
        </View>
      </View>

      {/**right icons */}
      <View style={tw`absolute right-4 bottom-40`}>
        <View
          style={[
            tw`border-2 border-white overflow-hidden`,
            { borderRadius: 50 },
          ]}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6iS1DcfpYzwmosq5ZZKlaUetfRSHtI7FkcA&usqp=CAU",
            }}
            style={{
              width: 40,
              height: 40,
              resizeMode: "contain",
            }}
          />
        </View>
        <View style={tw`items-center mt-5`}>
          <AntDesign name="heart" size={24} color="white" />
          <Text style={tw`text-white`}>{likes}</Text>
        </View>
        <View style={tw`items-center my-4`}>
          <FontAwesome5 name="comment-dots" size={24} color="white" />
          <Text style={tw`text-white`}>{comments}</Text>
        </View>
        <View style={tw`items-center`}>
          <FontAwesome5 name="share" size={24} color="white" />
          <Text style={tw`text-white`}>{shares}</Text>
        </View>
      </View>
    </View>
  );
};

export default VideoPost;
