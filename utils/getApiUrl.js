import Constants from 'expo-constants';
import { Platform } from 'react-native';

export const getApiUrl = () => {
  const { apiUrlLocal, apiUrlMobile } = Constants.expoConfig.extra;
  return Platform.OS === 'web' ? apiUrlLocal : apiUrlMobile;
};
export const API_URL = getApiUrl();

export default getApiUrl;