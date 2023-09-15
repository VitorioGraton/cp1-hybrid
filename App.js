import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import {Tela1} from './telas/tela1'
import {Tela2} from './telas/tela2'
{`

ATENÇÃO: SALVE ESTE SNACK NO SEU USER

Vamos fazer o mesmo que fizemos na revisão
https://snack.expo.dev/@eshinkawa/simulado2

1) Crie uma pasta chamada 'tela' e crie dois arquivos tela1.js e tela2.js

2) Importe os arquivos para o App.js

3) No arquivo tela1.js, que vai conter o componente Tela1, faça um fetch para API com este endereço: https://run.mocky.io/v3/8810362d-ffa4-4635-9180-dfefa47242f4 (não esqueça de chamar o fetch numa função dentro de um useEffect)

5) Adicione os dados na Flatlist
https://dev.to/zenkoders/what-is-a-flatlist-how-we-use-flatlist-in-react-native-1561

6) Mostre os dados na tela

7) Ao clicar em um item, navegar para tela dois e levar os dados do item para Tela2 via parâmetros de navegação

8) Mostrar os dados na tela2 advindos dos parâmetros de navegação

9) EXTRA: Salvar item no AsyncStorage
https://snack.expo.dev/@eshinkawa/github.com-eshinkawa-expo-lighteria@aula6

10) EXTRA2: Adicionar uma terceira tela que mostra a lista de items salvos no AsyncStorage


`}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela1">
        <Stack.Screen
          name="Tela1"
          component={Tela1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tela2"
          component={Tela2}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
