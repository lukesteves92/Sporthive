import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { api } from '../api/client'

export default function HomeScreen({ navigation }: any) {
  const [games, setGames] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  async function load() {
    setLoading(true)
    try {
      const res = await api.get('/api/games')
      setGames(res.data)
    } catch {
      setGames([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const unsub = navigation.addListener('focus', load)
    return unsub
  }, [navigation])

  return (
    <View style={{ flex: 1, padding: 16, gap: 12 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 22, fontWeight: '700' }}>Jogos próximos</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text style={{ color: '#1D9EFF' }}>Perfil</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          data={games}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: 10 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('GameDetails', { id: item.id })}
              style={{ borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 14, padding: 14 }}
            >
              <Text style={{ fontSize: 12, opacity: 0.7 }}>{item.sport}</Text>
              <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 2 }}>{item.venueName}</Text>
              <Text style={{ fontSize: 13 }}>{new Date(item.date).toLocaleString()}</Text>
              <Text style={{ fontSize: 13, marginTop: 4 }}>Vagas: {item.confirmed.length}/{item.maxPlayers}</Text>
            </TouchableOpacity>
          )}
          onRefresh={load}
          refreshing={loading}
        />
      )}

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{ alignSelf: 'center', borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 12, paddingVertical: 10, paddingHorizontal: 16 }}
      >
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}