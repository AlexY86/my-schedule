import 'dotenv/config';

export default {
  expo: {
    name: 'my-schedule',
    slug: 'my-schedule',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'myschedule',
    userInterfaceStyle: 'automatic',
    extra: {
      supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
      apiUrlLocal: process.env.EXPO_PUBLIC_API_URL_LOCAL,
      apiUrlMobile: process.env.EXPO_PUBLIC_API_URL_LOCAL_MOBILE,
    },
  },
};
