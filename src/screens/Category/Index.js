import {View, Text, FlatList,TouchableOpacity,KeyboardAvoidingView,Image} from 'react-native';
import React from 'react';
import { bgColor } from '../../constants/colors/index';

const data = [
  { id: '1', text: 'Item 1' },
  { id: '2', text: 'Item 2' },
  { id: '3', text: 'Item 3' },
  { id: '4', text: 'Item 4' },
  { id: '5', text: 'Item 5' },
  { id: '6', text: 'Item 6' },
  { id: '7', text: 'Item 7' },
  { id: '8', text: 'Item 8' },
  { id: '9', text: 'Item 9' },
  { id: '10', text: 'Item 10' },
  { id: '11', text: 'Item 11' },
];
export default function Index() {
  const RenderData = ({item, index}) => {
    const isLastItem = index === data.length - 1;
    const isOddLength = data.length % 2 !== 0;
    const flexValue = isLastItem && isOddLength ? 0.42 : 1;
    const widthValue = isLastItem && isOddLength ? '100%' : 'auto';
    return (

<TouchableOpacity  style={{
        flex: flexValue,
        width: widthValue,
        padding: 15,
        borderWidth: 1,
        borderColor: 'pink',
        alignItems: 'center',
        borderRadius: 10,
        borderColor:'black',
        marginHorizontal: 10,
        backgroundColor: bgColor[index % 7],
        marginBottom:10,
        
      }}>
  <View>
    <Image        source={require('../../Assets/1.png')}
              resizeMode="contain"
              style={{width: 60, height: 60}}/>
        <Text >{item.text}</Text>
      </View>
      </TouchableOpacity>
   
      
    );
  };
  const renderSeparator = () => <View style={{   height: 1,
   }} />;
  return (
    <View style={{marginTop:10}}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={RenderData}
        ItemSeparatorComponent={renderSeparator}
        numColumns={2}
      />
    </View>
  );
}
