import React from 'react'
import { View, Text } from 'react-native'

export default function EventCard({ title, date, location }: { title: string; date: string; location: string }) {
  return (
    <View style={{ borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 14, padding: 14 }}>
      <Text style={{ fontSize: 16, fontWeight: '600' }}>{title}</Text>
      <Text style={{ fontSize: 12 }}>{new Date(date).toLocaleString()}</Text>
      <Text style={{ fontSize: 12, opacity: 0.7 }}>{location}</Text>
    </View>
  )
}
