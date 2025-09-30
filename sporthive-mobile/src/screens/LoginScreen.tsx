import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { api } from '../api/client'

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function submit() {
    try {
      const res = await api.post('/api/auth', { email, password })
      if (res.data?.ok) Alert.alert('Login efetuado')
      else Alert.alert('Falha no login')
    } catch {
      Alert.alert('Falha no login')
    }
  }

  return (
    <View style={{ flex: 1, padding: 16, gap: 14 }}>
      <Text style={{ fontSize: 22, fontWeight: '700' }}>Entrar</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
        autoCapitalize="none"
        keyboardType="email-address"
        style={{ borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 12, paddingHorizontal: 12, paddingVertical: 12 }}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Senha"
        secureTextEntry
        style={{ borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 12, paddingHorizontal: 12, paddingVertical: 12 }}
      />
      <TouchableOpacity onPress={submit} style={{ backgroundColor: '#1D9EFF', paddingVertical: 14, borderRadius: 12, alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontWeight: '700' }}>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}
