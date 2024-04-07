import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Metrics from '../../Themes/Metrics';
import * as ImagePicker from 'react-native-image-picker';
const HomeScreen = () => {
  const [state, setState] = useState({
    filepath: {
      data: '',
      uri: '',
    },
    fileData: '',
    fileUri: '',
  });

  const launchImageLibrary = () => {
    console.log('inside image library');
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response.assets));
        setState(prevState => ({
          ...prevState,
          filepath: response,
          fileData: response.assets[0].uri,
          fileUri: response.assets[0].uri,
        }));
      }
    });
  };

  const launchCamera = () => {
    console.log('inside camera');
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response.assets.uri));
        setState(prevState => ({
          ...prevState,
          filepath: response,
          fileData: response.assets.uri,
          fileUri: response.uri,
        }));
      }
    });
  };

  const renderFileData = () => {
    console.log("state.fileData",state.fileData)
    if (state.fileData) {
      return (
        <Image
          source={{ uri:  state.fileData }}
          style={styles.images}
        />
      );
    } else {
      return (
        <Image source={require('../../Assets/1.png')} style={styles.images} />
      );
    }
  };

  const renderFileUri = () => {
    if (state.fileUri) {
      return <Image source={{ uri: state.fileUri }} style={styles.images} />;
    } else {
      return (
        <Image source={require('../../Assets/1.png')} style={styles.images} />
      );
    }
  };

  return (
    <View
      style={{
        flex: 1,
     
        alignItems: 'center',
        justifyContent: 'center',
        padding: Metrics.rfv(10),
      }}>
      <View style={styles.ImageSections}>
        <View>
          {renderFileData()}
          <Text style={{ textAlign: 'center' }}>Base 64 String</Text>
        </View>
        <View>
          {renderFileUri()}
          <Text style={{ textAlign: 'center' }}>File Uri</Text>
        </View>
      </View>

      <TouchableOpacity
        style={{ height: Metrics.rfv(30), backgroundColor: 'pink' }}
        onPress={() => {
          launchImageLibrary();
        }}>
        <Text>Choose from Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: Metrics.rfv(30),
          marginTop: Metrics.rfv(10),
          backgroundColor: 'pink',
        }}
        onPress={() => {
          launchCamera();
        }}>
        <Text>Choose from Camera</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ImageSections: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center',
  },
  images: {
    width: 150,
    height: 150,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 3,
  },
});

export default HomeScreen;
