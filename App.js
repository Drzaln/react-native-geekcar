import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import React from 'react'
import Detail from './src/screen/Home/Detail/Detail'
import Home from './src/screen/Home/Home'
const Stack = createStackNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				headerMode='none'
				screenOptions={{
					...TransitionPresets.SlideFromRightIOS
				}}>
				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen name='Detail' component={Detail} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
