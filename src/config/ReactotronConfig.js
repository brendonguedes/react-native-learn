import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '177.133.189.198' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
