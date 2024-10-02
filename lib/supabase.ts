import {AppState} from 'react-native';
import 'react-native-url=polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createClient} from '@supabase/supabase-js';
import {SUPABASE_URL} from '.@env';
import {SUPABASE_ANON_KEY} from '.@env';

const supabaseUrl= {SUPABASE_URL};
const supabaseAnonKey= {SUPABASE_ANON_KEY};
