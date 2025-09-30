import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function ProfileScreen() {
  const [name, setName] = useState('')
  const [level, setLevel] = useState('iniciante')

  async function load() {
    const n = await AsyncStorage.getItem('profile_name')
    const l = await AsyncStorage.getItem('profile_level')
    if (n) setName(n)
    if (l) setLevel(l)
  }

  async function save() {
    await AsyncStorage.setItem('profile_name', name)
    await AsyncStorage.setItem('profile_level', level)
    Alert.alert('Perfil salvo')
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <View style={{ flex: 1, padding: 16, gap: 14 }}>
      <Text style={{ fontSize: 22, fontWeight: '700' }}>Perfil</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Nome"
        style={{ borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 12, paddingHorizontal: 12, paddingVertical: 12 }}
      />
      <TextInput
        value={level}
        onChangeText={setLevel}
        placeholder="Nível (iniciante, intermediario, avancado)"
        style={{ borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 12, paddingHorizontal: 12, paddingVertical: 12 }}
      />
      <TouchableOpacity onPress={save} style={{ backgroundColor: '#1D9EFF', paddingVertical: 14, borderRadius: 12, alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontWeight: '700' }}>Salvar</Text>
      </TouchableOpacity>
    </View>
  )
}
