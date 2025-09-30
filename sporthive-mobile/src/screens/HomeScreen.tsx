import React, { useEffect, useState, useCallback } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { api } from '../api/client'

const mockEvents = [
  { id: 'm1', sport: 'Futebol', title: 'Pelada de Teste', date: new Date().toISOString(), location: 'Quadra Central', participants: 8 },
  { id: 'm2', sport: 'Basquete', title: 'Treino Amistoso', date: new Date(Date.now() + 86400000).toISOString(), location: 'Ginásio Bairro', participants: 12 }
]

export default function HomeScreen({ navigation }: any) {
  const [events, setEvents] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const res = await api.get('/events')
      if (Array.isArray(res.data) && res.data.length > 0) setEvents(res.data)
      else setEvents(mockEvents)
    } catch {
      setEvents(mockEvents)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
    const unsub = navigation.addListener('focus', load)
    return unsub
  }, [navigation, load])

  return (
    <View style={{ flex: 1, padding: 16, gap: 12, backgroundColor: '#fff' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 22, fontWeight: '800' }}>Jogos próximos</Text>
      </View>

      {loading ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          data={events}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={{ gap: 12, paddingBottom: 24 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('GameDetails', { id: item.id })}
              style={{
                borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 20, padding: 16, backgroundColor: '#fff',
                shadowColor: '#000', shadowOpacity: 0.06, shadowOffset: { width: 0, height: 3 }, shadowRadius: 6, elevation: 2
              }}
              activeOpacity={0.8}
            >
              <Text style={{ fontSize: 12, color: '#0E7FE0', fontWeight: '700' }}>{item.sport}</Text>
              <Text style={{ fontSize: 18, fontWeight: '800', marginTop: 4 }}>{item.title}</Text>
              <Text style={{ fontSize: 14, marginTop: 2 }}>{new Date(item.date).toLocaleString()}</Text>
              <View style={{ flexDirection: 'row', marginTop: 8, gap: 10 }}>
                <Text style={{ fontSize: 13, color: '#111' }}>{item.location}</Text>
                <Text style={{ fontSize: 13, color: '#111' }}>Participantes: {item.participants}</Text>
              </View>
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