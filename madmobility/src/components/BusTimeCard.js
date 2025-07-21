import React from 'react';
import { View, Text } from 'react-native';
import { Clock } from 'lucide-react-native';

const BusTimeCard = ({ line }) => {
  const getTimeColor = (time) => {
    if (!time || time === 'Sin datos') return '#EF4444'; // Rojo
    const minutes = parseInt(time);
    if (minutes <= 3) return '#059669'; // Verde
    if (minutes <= 8) return '#F59E0B'; // Amarillo
    return '#3B82F6'; // Azul
  };

  const getTimeBackground = (time) => {
    if (!time || time === 'Sin datos') return '#FEE2E2'; // Rojo claro
    const minutes = parseInt(time);
    if (minutes <= 3) return '#D1FAE5'; // Verde claro
    if (minutes <= 8) return '#FEF3C7'; // Amarillo claro
    return '#DBEAFE'; // Azul claro
  };

  return (
    <View className="bg-white rounded-lg p-4 mb-3 shadow-sm border border-gray-100">
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center flex-1">
          <View className="bg-blue-500 rounded-full w-10 h-10 items-center justify-center mr-3">
            <Text className="text-white font-bold text-sm">{line.line}</Text>
          </View>
          <View className="flex-1">
            <Text className="font-semibold text-gray-800 text-base" numberOfLines={2}>
              {line.destination}
            </Text>
            <Text className="text-gray-500 text-sm">ID: {line.busId}</Text>
            {line.distance > 0 && (
              <Text className="text-gray-400 text-xs">
                Distancia: {line.distance}m
              </Text>
            )}
          </View>
        </View>
        <View className="items-end ml-3">
          <View 
            className="flex-row items-center px-3 py-2 rounded-full"
            style={{ 
              backgroundColor: getTimeBackground(line.time)
            }}
          >
            <Clock size={14} color={getTimeColor(line.time)} />
            <Text 
              className="font-bold ml-1 text-sm"
              style={{ color: getTimeColor(line.time) }}
            >
              {line.time}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BusTimeCard;