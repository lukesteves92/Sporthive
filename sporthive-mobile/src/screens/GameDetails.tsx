import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { api } from '../api/client'

export default function GameDetails({ route }: any) {
  const { id } = route.params
  const [game, setGame] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  async function load() {
    setLoading(true)
    try {
      const res = await api.get('/api/games')
      const g = res.data.find((x: any) => x.id === id)
      setGame(g)
    } finally {
      setLoading(false)
    }
  }

  async function confirm() {
    const key = 'confirmedGames'
    const raw = await AsyncStorage.getItem(key)
    const arr = raw ? JSON.parse(raw) : []
    if (!arr.includes(id)) arr.push(id)
    await AsyncStorage.setItem(key, JSON.stringify(arr))
    Alert.alert('Presença confirmada')
  }

  useEffect(() => {
    load()
  }, [id])

  if (loading || !game) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <View style={{ flex: 1, padding: 16, gap: 12 }}>
      <Text style={{ fontSize: 22, fontWeight: '700' }}>{game.sport} • {new Date(game.date).toLocaleString()}</Text>
      <View style={{ borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 14, padding: 14, gap: 6 }}>
        <Text>Local: {game.venueName}</Text>
        <Text>Vagas: {game.confirmed.length}/{game.maxPlayers}</Text>
        <Text>Nível sugerido: {game.levelTarget ?? 'Livre'}</Text>
        <Text>Rateio: R$ {game.priceSplit?.toFixed(2) ?? '0,00'}</Text>
      </View>
      <TouchableOpacity onPress={confirm} style={{ backgroundColor: '#1D9EFF', paddingVertical: 14, borderRadius: 12, alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontWeight: '700' }}>Confirmar presença</Text>
      </TouchableOpacity>
    </View>
  )
}