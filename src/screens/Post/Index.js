import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  RadioButton,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Image
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {Formik} from 'formik';
import AppPickerV2 from '../../constants/AppPickerV2';
import {FONT_SIZE, industries} from '../../constants/utils/index';
import Metrics from '../../Themes/Metrics';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import AppInput from '../../constants/AppInput';
import {Fonts} from '../../Themes/AppTheme';
import colors from '../../constants/colors/index';
import ButtonsRow from '../../constants/ButtonsRow';
import { v4 as uuidv4 } from "uuid";
import axios from 'axios';
import * as Yup from 'yup';
import { storage } from '../../../firebase';
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";
export default function Index() {
  const formRef = useRef();
  const baseUrl = 'https://reqres.in';
  const [showStage, setShowStage] = useState(false);
  const [showImage, setshowImage] = useState(false)
  const [addCatogory, setaddCatogory] = useState([]);
  const [addImage, setImage] = useState([]);
  const [condition, setcondition] = useState();
  const [bookCondition, setbookCondition] = useState();
  const toggleStageMenu = () => setShowStage(v => !v);
  const toggleImageMenu = () => setshowImage(v => !v);
  const initialAddAccountForm = {
    title: '',
    author: '',
    bookEdition: '',
    description: '',
    category: null,
    originalPrice: '',
    bookCondition: '',
    sellingOption:'',
    sellingPrice: '',
    imageUrl: '',
  };
 const imageCatogory =["upload from Gallery","upload from Camera"]
  console.log('addCatogory', addCatogory);
  const handleSubmitClick = async values => {
    console.log(values);
    try {
      const response = await axios.post('http://localhost:3000/books/registerBook', values);
      console.log('Response:', response.data);
      // Handle response data as needed
    } catch (error) {
      console.error('Error:', error);
      // Handle errors
    }
  };
  const [state, setState] = useState({
    filepath: {
      data: '',
      uri: '',
    },
    fileData: '',
    fileUri: '',
  });
  const getUrlFromFirebase = async (image) => {
    console.log("insidwee")
    // if (imageUpload == null) return;
    const storageRef = ref(storage, `Img/${1}`);
    console.log("storageRef",storageRef)
    try {
      const snapshot = await uploadBytes(storageRef, image);
      console.log("snapshot",snapshot)
      const url = await getDownloadURL(snapshot.ref);
      console.log("url",url)
      return url;
    } catch (error) {
      console.log("error",error)
      console.error("Error uploading image:", error);
      throw error;
    }
  };
  const launchImageLibrary = async() => {

    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary (options, response => {

      if (response.didCancel) {

      } else if (response.error) {
    
      } else if (response.customButton) {

        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        async function uploadImageToFirebase() {
          const imageUrl = await getUrlFromFirebase(response.assets[0].uri);
          setState(prevState => ({
            ...prevState,
            filepath: imageUrl,
            fileData:response.assets[0].uri,
            fileUri: imageUrl,
          }));
      }
      uploadImageToFirebase();
      }
    });
  };

  const launchCamera = () => {

    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, response => {
     
      if (response.didCancel) {

      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        async function uploadImageToFirebase() {
          const imageUrl = await getUrlFromFirebase(response.assets[0].uri);
          setState(prevState => ({
            ...prevState,
            filepath: imageUrl,
            fileData:response.assets[0].uri,
            fileUri: imageUrl,
          }));
      }
      uploadImageToFirebase();}
    });
  };

  const renderFileData = () => {
    console.log("state.fileData",state.fileData)
    if (state.fileData) {
      return (
        <Image
          source={{ uri:state.fileData }}
          style={styles.images}
        />
      );
    } else {
      return (
        <Image source={require('../../Assets/1.png')} style={styles.images} />
      );
    }
  };

  const renderSetCatogory = values => {
    formRef?.current?.setFieldValue('category', values);
    setaddCatogory([values]);
    toggleStageMenu();
  };
  const renderSetImage = values => {
    // formRef?.current?.setFieldValue('category', values);
    setImage([values]);
    console.log(addImage)
if (addImage[0] === 'upload from Gallery') {
  launchCamera();
} else {
  launchImageLibrary();
}
    toggleImageMenu();
  };

  const renderRadioOptions = ({item}) => {
    return (
      <View style={styles.associationView}>
        <View>
          <TouchableOpacity
            onPress={() => {
              formRef?.current?.setFieldValue('bookCondition', item);
              setcondition(item);
            }}
            activeOpacity={0.5}
            style={styles.radioView}>
            <View style={styles.mRight5}>
              <IconMaterial
                name={
                  // customField?.[getCustomType(customField)] == item.label
                  //don't compare with ===
                  item === condition
                    ? 'radio-button-checked'
                    : 'radio-button-unchecked'
                }
                size={Metrics.rfv(22)}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.columnText}>{item}</Text>
        </View>
      </View>
    );
  };
  const renderbookConditions = ({item}) => {
    return (
      <View style={styles.associationView}>
        <View>
          <TouchableOpacity
            onPress={() => {
              formRef?.current?.setFieldValue('sellingOption', item);
              setbookCondition(item);
            }}
            activeOpacity={0.5}
            style={styles.radioView}>
            <View style={styles.mRight5}>
              <IconMaterial
                name={
                  // customField?.[getCustomType(customField)] == item.label
                  //don't compare with ===
                  item === bookCondition
                    ? 'radio-button-checked'
                    : 'radio-button-unchecked'
                }
                size={Metrics.rfv(22)}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.columnText}>{item}</Text>
        </View>
      </View>
    );
  };
  const ErrorText = props => {
    const {errorMsg} = props;
    return (
      <Text style={{...styles.errorText, ...props.style}}>{errorMsg}</Text>
    );
  };
  return (
    <KeyboardAvoidingView
      style={styles.keyboardView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled
      keyboardVerticalOffset={100}>
      {/* {loading ? <AppLoader transparent={true} /> : null} */}
      <ScrollView
        style={{marginBottom: Metrics.rfv(50)}}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}
        overScrollMode={'never'}>
        <Formik
          validationSchema={addBookSchema}
          initialValues={initialAddAccountForm}
          innerRef={formRef}
          onSubmit={values => handleSubmitClick(values)}>
          {({
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
            touched,
            setValues,
            handleChange,
          }) => (
            <View>
              {/* <Text style={styles.title}> Add Book Details</Text> */}
              <View>
                <View style={styles.mainView1}>
                  <AppInput
                    value={values.title}
                    setValue={handleChange('title')}
                    autoCorrect={false}
                    label={'Book Name'}
                    autoCapitalize={'none'}
                    multiline
                    style={styles.textInput}
                    onBlur={handleBlur('title')}
                  />
                </View>
              </View>
              {errors.title && touched.title ? (
                <ErrorText errorMsg={errors.title} style={styles.errorText} />
              ) : null}
              <View style={styles.mainView1}>
                <AppInput
                  value={values.author}
                  setValue={handleChange('author')}
                  autoCorrect={false}
                  label={'Author Name'}
                  autoCapitalize={'none'}
                  multiline
                  style={styles.textInput}
                />
              </View>
              <View style={styles.mainView1}>
                <AppInput
                  value={values.description}
                  setValue={handleChange('description')}
                  autoCorrect={false}
                  label={'Book Description'}
                  autoCapitalize={'none'}
                  multiline
                  style={styles.textInput}
                />
              </View>
              <View style={styles.mainView1}>
                <AppInput
                  value={values.bookEdition}
                  setValue={handleChange('bookEdition')}
                  autoCorrect={false}
                  label={'Book Edition'}
                  autoCapitalize={'none'}
                  multiline
                  style={styles.textInput}
                />
              </View>

              <View style={styles.mainView1}>
                <AppPickerV2
                  showMenu={showStage}
                  toggleMenu={toggleStageMenu}
                  label={'Select Book Catogroy'}
                  placeholderText={'Select Catogroy'}
                  items={industries}
                  valueExtractor={'name'}
                  value={addCatogory}
                  handlePress={value => renderSetCatogory(value)}
                />
              </View>
              {errors.category  ? (
                <ErrorText
                  errorMsg={errors.category}
                  style={styles.errorText}
                />
              ) : null}
              <View style={styles.mainView1}>
                <AppInput
                  value={values.originalPrice}
                  setValue={handleChange('originalPrice')}
                  autoCorrect={false}
                  label={'Book Printed Price'}
                  autoCapitalize={'none'}
                  multiline
                  style={styles.textInput}
                />
              </View>
              {errors.originalPrice && touched.originalPrice ? (
                <ErrorText
                  errorMsg={errors.originalPrice}
                  style={styles.errorText}
                />
              ) : null}
              <View style={styles.mainView}>
                <Text style={styles.textView}>{'Book Condition'}</Text>
                <FlatList
                  data={['New Book', 'Used Book']}
                  renderItem={itemData => renderRadioOptions(itemData)}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
              {errors.bookCondition ? (
                <ErrorText
                  errorMsg={errors.bookCondition}
                  style={styles.errorText}
                />
              ) : null}
              <View style={styles.mainView}>
                <Text style={styles.textView}>{'Selling option'}</Text>
                <FlatList
                  data={['Sell', 'Rent', 'Donate']}
                  renderItem={itemData => renderbookConditions(itemData)}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
              {errors.sellingOption && touched.sellingOption ? (
                <ErrorText
                  errorMsg={errors.sellingOption}
                  style={styles.errorText}
                />
              ) : null}
              <View style={styles.mainView1}>
                <AppInput
                  value={values.sellingPrice}
                  setValue={handleChange('sellingPrice')}
                  autoCorrect={false}
                  label={'Offered Price'}
                  autoCapitalize={'none'}
                  multiline
                  style={styles.textInput}
                />
              </View>
              {errors.sellingPrice && touched.sellingPrice ? (
                <ErrorText
                  errorMsg={errors.sellingPrice}
                  style={styles.errorText}
                />
              ) : null}
              <View style={styles.mainView}>
              <AppPickerV2
                  showMenu={showImage}
                  label={'Select Image'}
                  placeholderText={'upload image'}
                  toggleMenu={toggleImageMenu}
                  items={imageCatogory}
                  valueExtractor={'name'}
                  value={addImage}
                  handlePress={value => renderSetImage(value)}
                />
              </View>

            
              <View style={styles.ImageSections}>
        <View style={styles.mainView}>
          {renderFileData()}
          
        </View>
        </View>
              {errors.imageUrl && touched.imageUrl ? (
                <ErrorText
                  errorMsg={errors.imageUrl}
                  style={styles.errorText}
                />
              ) : null}
              <View style={{marginTop:50}}> 

              <ButtonsRow
                // disable={!isValid || loading}
                btnTextOne={'Add '}
                btnTextTwo={'Cancel'}
                onPressOne={handleSubmit}
                // onPressTwo={toggleAlert}
              />
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  associationView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginTop: Metrics.rfv(10),
    marginHorizontal: Metrics.rfv(10),
    borderRadius: Metrics.rfv(10),
  },
  mainView1: {
    flexDirection: 'row',
    marginLeft: Metrics.rfv(20),
    marginRight: Metrics.rfv(20),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: Metrics.rfv(5),
  },
  images: {
    width: 100,
    height: 100,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 3,
  },
  mainView: {
    marginLeft: Metrics.rfv(20),
    marginRight: Metrics.rfv(20),
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginVertical: Metrics.rfv(5),
  },
  textInput: {
    flex: 1,
    marginLeft: Metrics.rfv(0),
    marginRight: Metrics.rfv(0),
    paddingVertical: Metrics.rfv(0),
    paddingHorizontal: Metrics.rfv(0),
    color: colors.black,
    fontFamily: Fonts.Roboto400,
    fontSize: FONT_SIZE.small_medium,
  },
  textView: {
    color: colors.greyTheme2,
    fontSize: FONT_SIZE.small,
    fontFamily: Fonts.Roboto400,
    marginBottom: Metrics.rfv(7),
  },
  mRight5: {marginRight: Metrics.rfv(5)},
  title: {
    color: colors.greyTheme1,
    fontSize: FONT_SIZE.large,
    fontFamily: Fonts.Roboto500,
    marginBottom: Metrics.rfv(7),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    flex: 1,
    marginHorizontal: Metrics.rfv(80),
  },
  columnText: {
    // color: Colors.mainTheme1,
    fontSize: FONT_SIZE.small_medium,
    fontFamily: Fonts.Roboto400,
  },
  radioView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: Metrics.rfv(5),
  },
  keyboardView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  errorText: {
    marginHorizontal: Metrics.rfv(20),
    color: 'red',
  },
  ImageSections: {
    display: 'flex',
    flexDirection: 'row',
   height:50,
   width:10,
    // justifyContent: 'center',
  },
});
const addBookSchema = () => {
  return Yup.object().shape({
    title: Yup.string().trim().required('please add book Name'),
    author: Yup.string().trim(),
    bookEdition: Yup.number().nullable(),
    description: Yup.string().trim(),
    category: Yup.string().trim().required('please add book Category'),
    originalPrice: Yup.number().nullable().required('please add book price'),
    bookCondition: Yup.string().nullable().required('please add book condition'),
    sellingOption: Yup.string().nullable().required('please add sell option'),
    sellingPrice: Yup.string().nullable().required('please add sell price'),
    imageUrl: Yup.string().nullable().required('please add Image Url'),
  });
};
