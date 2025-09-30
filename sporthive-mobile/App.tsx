import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen'
import GameDetails from './src/screens/GameDetails'
import LoginScreen from './src/screens/LoginScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import Ionicons from '@expo/vector-icons/Ionicons'
import { StatusBar } from 'expo-status-bar'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: { fontWeight: '800' },
          headerShadowVisible: false
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'SportHive',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Profile')} activeOpacity={0.7}>
                <View style={{ marginRight: 4 }}>
                  <Ionicons name="person-circle-outline" size={28} color="#0E7FE0" />
                </View>
              </TouchableOpacity>
            )
          })}
        />
        <Stack.Screen
          name="GameDetails"
          component={GameDetails}
          options={({ navigation }) => ({
            title: 'Detalhes do Jogo',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Profile')} activeOpacity={0.7}>
                <View style={{ marginRight: 4 }}>
                  <Ionicons name="person-circle-outline" size={28} color="#0E7FE0" />
                </View>
              </TouchableOpacity>
            )
          })}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Entrar', headerRight: () => null }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Perfil' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
