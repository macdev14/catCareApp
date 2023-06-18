
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Servicos from './src/telas/servicos';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { SafeAreaProvider } from "react-native-safe-area-context";
import Rotas from './src/rotas';
import TelaPadrao from './src/componentes/TelaPadrao';
import reactotron from 'reactotron-react-native';
reactotron.configure().useReactNative().connect();
console.tron = reactotron;
export default function App() {
  console.tron.log({ curso: 'alura' });
  return (
    <SafeAreaProvider>
    <TelaPadrao>
          <Rotas />
    </TelaPadrao>
     </SafeAreaProvider>




  );
}


