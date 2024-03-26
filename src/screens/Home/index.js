import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState, useRef} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Metrics from '../../Themes/Metrics';
import colors from '../../constants/colors/index';

const SliderData = [
  {
    id: 1,
    title: 'data1',
    url: 'https://images.pexels.com/photos/4996868/pexels-photo-4996868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    title: 'data2',
    url: 'https://images.pexels.com/photos/7171398/pexels-photo-7171398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    title: 'data3',
    url: 'https://images.pexels.com/photos/4153146/pexels-photo-4153146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    title: 'data4',
    url: 'https://images.pexels.com/photos/4865737/pexels-photo-4865737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];
export default function Index(props) {
  const [activeDotIndex, setactiveDotIndex] = useState(0);
  const _carousel = useRef();
  const renderData = ({item, index}) => {
    return (
      <View>
        <Image
          source={{uri: item.url}}
          style={{
            height: Dimensions.get('window').width - 150,
            width: Dimensions.get('window').width - 40,
          }}
        />
        {/* <Text>{item.title}</Text> */}
      </View>
    );
  };
  return (
    <ScrollView
      overScrollMode={'never'}
      style={styles.flex1}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.mainContainer}>
      <View>
        <SafeAreaView>
          <Carousel
            ref={_carousel}
            data={SliderData}
            renderItem={renderData}
            sliderWidth={Dimensions.get('window').width - 10}
            itemWidth={Dimensions.get('window').width}
            onSnapToItem={index => setactiveDotIndex(index)}
          />
        </SafeAreaView>
      </View>
      <View>
        <Pagination
          carouselRef={_carousel}
          activeDotIndex={activeDotIndex}
          dotsLength={3}
        />
      </View>
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('User')}>
        <Text>This is home</Text>
      </TouchableOpacity> */}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    marginHorizontal: Metrics.rfv(20),
  },
  flex1: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
