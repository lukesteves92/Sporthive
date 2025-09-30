import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { api } from '../api/client'

export default function GameDetails({ route }: any) {
  const { id } = route.params
  const [event, setEvent] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  async function load() {
    setLoading(true)
    try {
      const res = await api.get('/events')
      setEvent(res.data.find((x: any) => x.id === id) || null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [id])

  if (loading || !event) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <View style={{ flex: 1, padding: 16, gap: 12 }}>
      <Text style={{ fontSize: 22, fontWeight: '700' }}>{event.title}</Text>
      <View style={{ borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 14, padding: 14, gap: 6 }}>
        <Text>Esporte: {event.sport}</Text>
        <Text>Data: {new Date(event.date).toLocaleString()}</Text>
        <Text>Local: {event.location}</Text>
        <Text>Participantes: {event.participants}</Text>
      </View>
      <TouchableOpacity style={{ backgroundColor: '#1D9EFF', paddingVertical: 14, borderRadius: 12, alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontWeight: '700' }}>Confirmar presença</Text>
      </TouchableOpacity>
    </View>
  )
}
