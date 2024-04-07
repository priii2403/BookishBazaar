import {Platform} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import moment from 'moment';
import FuseUtils from '@fuse/utils';
import {
  getDateFormatString,
  getTimeFormatString,
} from 'app/main/utility/datetimeformat';
import Metrics from '../Themes/Metrics';
import store from 'app/store/createStore';
import {showMessage} from '../store/actions';
import {Colors} from '../Themes/AppTheme';

export const avatarText = username => {
  return username
    ?.split(' ')
    .map(function (item, index) {
      if (index < 2) {
        return item[0];
      }
    })
    .join('')
    .toUpperCase();
};

export const secondsToHms = d => {
  const sec_num = parseInt(d, 10);
  let hours = Math.floor(sec_num / 3600);
  let minutes = Math.floor((sec_num - hours * 3600) / 60);
  let seconds = sec_num - hours * 3600 - minutes * 60;
  // var format = hours > 0 ? ' (HH:MM:SS)' : ' (MM:SS)';
  // hours = hours > 0 ? hours < 10 && '0' + hours + ':' : '';
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  if (hours === '00') {
    return minutes + ':' + seconds;
  }
  return hours + ':' + minutes + ':' + seconds;
};

export const appHitSlop = (t = 0, r = 0, b = 0, l = 0) => {
  return {
    top: Metrics.rfv(t),
    right: Metrics.rfv(r),
    bottom: Metrics.rfv(b),
    left: Metrics.rfv(l),
  };
};

export const getTaskTypeIcon = icon => {
  switch (icon) {
  case 'list':
    return 'playlist-add';
  case 'phone':
  case 'call':
    return 'phone';
  case 'message':
    return 'message';
  case 'email':
    return 'email';
  case 'zoom_in':
    return 'zoom-in';
  case 'trip-origin':
    return 'trip-origin';
  case 'arrow-downward':
    return 'arrow-downward';
  case 'arrow-upward':
    return 'arrow-upward';
  case 'menu':
    return 'menu';
  case 'play_circle_filled':
    return 'play-circle-filled';
  case 'timelapse':
    return 'timelapse';
  case 'schedule':
    return 'schedule';
  case 'done_all':
    return 'done-all';
  case 'done':
    return 'done';
  case 'restore':
    return 'restore';
  default:
    return 'list';
  }
};

const symbols = [
  {value: 1, symbol: ''},
  // {value: 1e3, symbol: 'k'},
  {value: 1e6, symbol: 'M'},
  {value: 1e9, symbol: 'B'},
  {value: 1e12, symbol: 'T'},
  {value: 1e15, symbol: 'Q'},
  {value: 1e18, symbol: 'E'},
];

//only using for product module for negative value
export function numberFormatter(num, digits, symbol) {
  const numToCheck = Math.abs(num);
  for (let i = symbols.length - 1; i >= 0; i--) {
    if (numToCheck >= symbols[i].value) {
      const newNumber = (num / symbols[i].value).toFixed(digits);
      const sign = newNumber < 0 ? '-' : '+';
      const absoluteValue = Math.abs(newNumber);
      if (sign === '-') {
        return `${sign}${symbol}${absoluteValue} ${symbols[i].symbol}`;
      }
      return `${symbol}${newNumber}${symbols[i].symbol}`;
    }
  }
  return '0';
}

export const currencyFormat = (value, isInput) => {
  if (!value) return value;
  const storeValue = store.getState();
  const locale = storeValue?.auth?.business?.country?.locale || 'en-us';
  const symbol = storeValue?.auth?.business?.currency?.symbol || '$';
  if (value.toString().length > 6 && !isInput)
    return `${symbol}${isNaN(value) ? 0 : numberFormatter(value, 2, '')}`;
  else return `${symbol}${isNaN(value) ? 0 : value?.toLocaleString(locale)}`;
};

export const noPermissionHandler = () => {
  showMessage({
    message: 'Permission Denied',
    variant: 'error',
    type: 'permission',
  });
};

export const bgColor = [
  '#D9EBFF',
  '#FDEEEF',
  '#F4F0FD',
  '#E3F5F3',
  '#FEEED0',
  '#FAE7E1',
  '#DFF2FA',
];

export const bulkBgColor = [
  '#D9EBFF',
  '#FFE1E3',
  '#DFE1E9',
  '#EDE5FF',
  '#CBEFEB',
  '#FDEDCF',
  'rgba(246,150,121,0.2)',
  'rgba(109,207,246,0.2)',
];

export const bulkIconColor = [
  '#5cb9ff',
  '#f27366',
  '#667093',
  '#8b50ff',
  '#00cbb2',
  '#fcac12',
  '#f27366',
  '#03c4f7',
];

export const getRandomColor = () => {
  return bgColor[Math.floor(Math.random() * 7)];
};

export const textTrim = (value, len = 10) => {
  return value?.length < len ? `${value}` : `${value?.substring(0, len)}...`;
};

export const renderColor = text => {
  switch (text) {
  case 'no-answer':
  case 'cancelled':
  case 'NoShow':
  case 'NoShowed':
  case 'Cancelled':
  case 'canceled':
  case 'cancel':
  case 'busy':
  case 'ringing':
    return {color: Colors.dasboardStates.red};
  case 'completed':
  case 'Confirmed':
  case 'Running':
  case 'running':
  case 'Showed':
    return {color: Colors.dasboardStates.green};
  case 'Pending':
  case 'pending':
  case 'pause':
    return {color: Colors.dasboardStates.yellow};
  default:
    return {color: Colors.dasboardStates.yellow};
  }
};

export const renderPriorityColor = priority => {
  switch (priority?.toLowerCase()) {
  case 'low':
    return Colors.lowPriority;
  case 'medium':
    return Colors.mediumPriority;
  case 'high':
    return Colors.highPriority;
  }
};

export const hiddenText = () => {
  return '********';
};

export const removeExtraSpace = str => {
  return str?.replace(/\s+/g, ' ')?.trim();
};

export const renderText = obj => {
  if (typeof obj !== 'string') return 'new message';
  const extend = obj && obj?.length > 100 ? ' ...' : '';
  return (
    obj
      .replace(/(<([^>]+)>|&nbsp;)/gi, '')
      .slice(0, 100)
      .trim() + extend
  );
};

export const renderDateType = dateValue => {
  const date = dateValue;
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  dateValue = new Date(dateValue).toLocaleDateString();
  const yesterdayDate = new Date(yesterday).toLocaleDateString();
  const todayFullDate = new Date(today).toLocaleDateString();
  if (dateValue === todayFullDate) return 'Today';
  else if (dateValue === yesterdayDate) return 'Yesterday';
  else return getDateFormatString(new Date(date));
};

export const renderFollowupDate = (dateValue, time) => {
  const timeStr = (time && getTimeFormatString(new Date(time))) || '';
  const dueDateValue = new Date(dateValue);
  if (time) {
    const timeString = new Date(time);
    dueDateValue?.setHours(timeString?.getHours());
    dueDateValue?.setMinutes(timeString?.getMinutes());
  }
  const dateStr = getDateFormatString(new Date(dateValue));
  if (moment(dueDateValue)?.isBefore(moment(new Date()))) {
    return `${dateStr} ${timeStr} ( Overdue )`;
  }
  return `${dateStr} ${timeStr}`;
};

export const timeConvert = dateValue => {
  return getTimeFormatString(new Date(dateValue));
};

export const uploadImageToStorage = (sourceURL, path) => {
  return new Promise((resolve, reject) => {
    const uploadTask = storage().ref(path).putFile(sourceURL);

    uploadTask.on(
      'state_changed',
      () => {},
      error => {
        reject(error);
      },
      async () => {
        try {
          const Url = await storage().ref(path).getDownloadURL();
          resolve(Url);
        } catch (e) {
          reject(e);
        }
      },
    );
  });
};

export const chooseImageFile = async (
  business_id,
  company_id,
  selectedMedia,
  setEmailTemplateValue,
  setmediaLoading,
  formRef,
  from,
) => {
  try {
    const images = await ImagePicker.openPicker({
      multiple: true,
    });
    await uploadImageFile(
      images,
      business_id,
      company_id,
      selectedMedia,
      setEmailTemplateValue,
      setmediaLoading,
      formRef,
      from,
    );
  } catch (e) {
    console.error(e);
  }
};

export const uploadImageFile = async (
  data,
  business_id,
  company_id,
  selectedMedia,
  setSelectedMedia,
  setmediaLoading,
  formRef,
  from,
) => {
  const dataList = [];
  try {
    for (let i = 0; i < data.length; i++) {
      const dataItem = data[i];
      const dataName = data[i].path.split('/');
      const dataType = data[i].mime.split('/');
      const mediaName =
        Platform.OS === 'ios'
          ? dataItem.filename
          : dataName[dataName?.length - 1];
      const folder = 'public_objects';
      const uniq_name = FuseUtils.generateGUID();
      const image_url =
        Platform.OS === 'ios' ? dataItem.sourceURL : dataItem.path;
      const prefix = business_id
        ? `${folder}/${company_id}/${business_id}`
        : `${folder}/${company_id}`;

      const path = `${prefix}/${uniq_name}`;
      setmediaLoading(true);

      try {
        const Url = await uploadImageToStorage(image_url, path);
        const dataObj = {
          name: mediaName,
          type: from === 'email' ? dataType[0] : 'images',
          url: Url,
        };
        dataList.push(dataObj);
      } catch (e) {
        console.error(e);
      }
      setmediaLoading(false);
    }

    dataList.forEach(dataItem => {
      const existingItem = selectedMedia?.find(
        item => item?.name === dataItem?.name,
      );
      if (!existingItem) {
        selectedMedia.push(dataItem);
      }
    });

    setSelectedMedia([...selectedMedia]);
    formRef?.current?.setFieldValue(
      from === 'email'
        ? 'email_attachments'
        : from === 'whatsapp'
          ? 'whatsapp_attachments'
          : 'sms_attachments',
      selectedMedia,
    );
  } catch (e) {
    console.error(e);
  }
};

export const manageRedirection = (item, navigation) => {
  const urlArray = item?.redirect_url?.split('/');
  const moduleName = urlArray[0];
  let subModuleName = '';

  if (
    moduleName === 'deal' ||
    moduleName === 'task' ||
    moduleName === 'followup'
  ) {
    subModuleName = moduleName;
  } else if (moduleName === 'contact' || moduleName === 'account') {
    subModuleName = urlArray[3];
  }
  //redirection setup
  return {
    contact_id:
      moduleName === 'contact' || moduleName === 'conversation'
        ? urlArray[2]
        : '',
    account_id: moduleName === 'account' ? urlArray[2] : '',
    deal_id: moduleName === 'deal' ? urlArray[3] : '',
    task_id: moduleName === 'task' ? urlArray[2] : '',
    operand_type: subModuleName,
    navigation: navigation,
  };
};
