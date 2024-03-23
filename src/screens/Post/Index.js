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
} from 'react-native';
import {Formik} from 'formik';
import AppPickerV2 from '../../constants/AppPickerV2';
import {FONT_SIZE, industries} from '../../constants/utils/index';
import Metrics from '../../Themes/Metrics';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import AppInput from '../../constants/AppInput';
import {Fonts} from '../../Themes/AppTheme';
import colors from '../../constants/colors/index';
import ButtonsRow from '../../constants/ButtonsRow';
import * as Yup from 'yup';
export default function Index() {
  const formRef = useRef();
  const [showStage, setShowStage] = useState(false);
  const [addCatogory, setaddCatogory] = useState([]);
  const [condition, setcondition] = useState();
  const [sellingoption, setsellingoption] = useState();
  const toggleStageMenu = () => setShowStage(v => !v);
  const initialAddAccountForm = {
    BookName: '',
    AuthorName: '',
    BookEdition: '',
    BookDescription: '',
    SelectBookCategory: null,
    BookPrintedPrice: '',
    BookCondition: '',
    SellingOption: '',
    OfferedPrice: '',
  };
  const catogory = ['architecture', '1to12'];
  console.log('addCatogory', addCatogory);
  const handleSubmitClick = async values => {
    console.log(values);
  };
  const renderSetCatogory = values => {
    setaddCatogory([values]);
    toggleStageMenu();
  };

  const renderRadioOptions = ({item}) => {

    return (
      <View style={styles.associationView}>
        <View>
          <TouchableOpacity
            onPress={() => setcondition(item)}
    
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
  const renderSellingOptions = ({item}) => {

    return (
      <View style={styles.associationView}>
        <View>
          <TouchableOpacity
            onPress={() => setsellingoption(item)}
      
            activeOpacity={0.5}
            style={styles.radioView}>
            <View style={styles.mRight5}>
              <IconMaterial
                name={
                  // customField?.[getCustomType(customField)] == item.label
                  //don't compare with ===
                  item === sellingoption
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
                    value={values.BookName}
                    setValue={handleChange('BookEdition')}
                    autoCorrect={false}
                    label={'Book Name'}
                    autoCapitalize={'none'}
                    multiline
                    style={styles.textInput}
                  />
                </View>
              </View>
              <View style={styles.mainView1}>
                <AppInput
                  value={values.BookName}
                  setValue={handleChange('AuthorName')}
                  autoCorrect={false}
                  label={'Author Name'}
                  autoCapitalize={'none'}
                  multiline
                  style={styles.textInput}
                />
              </View>
              <View style={styles.mainView1}>
                <AppInput
                  value={values.BookName}
                  setValue={handleChange('BookDescription')}
                  autoCorrect={false}
                  label={'Book Description'}
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
                  placeholderText={'Select Stage'}
                  items={industries}
                  valueExtractor={'name'}
                  value={addCatogory}
                  handlePress={value => renderSetCatogory(value)}
                />
              </View>
              <View style={styles.mainView1}>
                <AppInput
                  value={values.BookName}
                  setValue={handleChange('BookPrintedPrice')}
                  autoCorrect={false}
                  label={'Book Printed Price'}
                  autoCapitalize={'none'}
                  multiline
                  style={styles.textInput}
                />
              </View>

              <View style={styles.mainView}>
                <Text style={styles.textView}>{'Book Condition'}</Text>
                <FlatList
                  data={['New Book', 'Used Book']}
                  renderItem={itemData => renderRadioOptions(itemData)}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
              <View style={styles.mainView}>
                <Text style={styles.textView}>{'Selling option'}</Text>
                <FlatList
                  data={['Sell', 'Rent', 'Donate']}
                  renderItem={itemData => renderSellingOptions(itemData)}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
              <View style={styles.mainView1}>
                <AppInput
                  value={values.BookName}
                  setValue={handleChange('OfferedPrice')}
                  autoCorrect={false}
                  label={'Offered Price'}
                  autoCapitalize={'none'}
                  multiline
                  style={styles.textInput}
                />
              </View>
              <ButtonsRow
                // disable={!isValid || loading}
                btnTextOne={'Add '}
                btnTextTwo={'Cancel'}
                onPressOne={handleSubmit}
                // onPressTwo={toggleAlert}
              />
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
    color: 'blue',
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
    // marginBottom:Metrics.rfv(0)
  },
});
const addBookSchema = () => {
  return Yup.object().shape({
 
    BookName: Yup.string().trim(),
    AuthorName: Yup.string().trim(),
    BookEdition: Yup.number().nullable(),
    BookDescription: Yup.string().trim(),
    SelectBookCategory: Yup.string().trim(),
    BookPrintedPrice: Yup.number().nullable(),
    BookCondition: Yup.number().nullable(),
    SellingOption: Yup.number().nullable(),
    OfferedPrice: Yup.number().nullable(),
  });
};
