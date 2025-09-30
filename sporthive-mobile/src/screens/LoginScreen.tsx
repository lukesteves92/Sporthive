import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { api } from '../api/client'

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit() {
    if (!email || !password) return Alert.alert('Preencha e-mail e senha')
    setLoading(true)
    try {
      const res = await api.post('/auth/login', { email, password })
      if (res.data?.ok) {
        Alert.alert('Bem-vindo', `Olá, ${res.data.user?.name || 'usuário'}!`)
        navigation.replace('Home')
      } else {
        Alert.alert('Falha no login', 'Verifique suas credenciais')
      }
    } catch {
      Alert.alert('Erro ao conectar', 'Tente novamente')
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 20, justifyContent: 'center' }}>
      <View style={{ gap: 18 }}>
        <Text style={{ fontSize: 28, fontWeight: '800' }}>Entrar</Text>
        <Text style={{ fontSize: 14, color: '#555' }}>Acesse sua conta para confirmar presença nos jogos</Text>

        <View style={{ gap: 12, marginTop: 6 }}>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="E-mail"
            autoCapitalize="none"
            keyboardType="email-address"
            style={{ borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 14, paddingHorizontal: 14, paddingVertical: 12, fontSize: 16 }}
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Senha"
            secureTextEntry
            style={{ borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 14, paddingHorizontal: 14, paddingVertical: 12, fontSize: 16 }}
          />
        </View>

        <TouchableOpacity
          onPress={submit}
          disabled={loading}
          activeOpacity={0.85}
          style={{
            backgroundColor: '#1D9EFF',
            borderRadius: 16,
            paddingVertical: 14,
            alignItems: 'center',
            marginTop: 8,
            shadowColor: '#1D9EFF',
            shadowOpacity: 0.25,
            shadowOffset: { width: 0, height: 8 },
            shadowRadius: 12,
            elevation: 3,
            opacity: loading ? 0.7 : 1
          }}
        >
          <Text style={{ color: '#fff', fontWeight: '800', fontSize: 16 }}>
            {loading ? 'Entrando...' : 'Entrar'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ alignSelf: 'center', marginTop: 6 }}>
          <Text style={{ color: '#0E7FE0', fontWeight: '600' }}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}