import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import VgaScreen from './screens/VgaScreen'
import CalculoScreen from './screens/CalculoScreen'
import PrecalculoScreen from './screens/PrecalculoScreen'
import PleScreen from './screens/PleScreen'
import QuimicaScreen from './screens/QuimicaScreen'
import CtsScreen from './screens/CtsScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VgaScreen"
          component={VgaScreen}
          options={{ title: 'Aulas de VGA'}}
        />
        <Stack.Screen
          name="CalculoScreen"
          component={CalculoScreen}
          options={{ title: 'Aulas de Cálculo 1' }}
        />
        <Stack.Screen
          name="PrecalculoScreen"
          component={PrecalculoScreen}
          options={{ title: 'Aulas de Pré-Cálculo' }}
        />
        <Stack.Screen
          name="QuimicaScreen"
          component={QuimicaScreen}
          options={{ title: 'Aulas de Química' }}
        />
        <Stack.Screen
          name="PleScreen"
          component={PleScreen}
          options={{ title: 'Aulas de PLE' }}
        />
        <Stack.Screen
          name="CtsScreen"
          component={CtsScreen}
          options={{ title: 'Aulas de CTS' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
