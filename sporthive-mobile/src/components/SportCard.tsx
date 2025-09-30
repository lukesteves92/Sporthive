import React from 'react'
import { View, Text } from 'react-native'

export default function SportCard({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <View style={{ borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 14, padding: 14 }}>
      <Text style={{ fontSize: 16, fontWeight: '600' }}>{title}</Text>
      {!!subtitle && <Text style={{ fontSize: 12, opacity: 0.7 }}>{subtitle}</Text>}
    </View>
  )
}
