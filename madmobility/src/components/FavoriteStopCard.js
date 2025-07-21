import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Star, MapPin, Trash2 } from 'lucide-react-native';

const FavoriteStopCard = ({ 
  stopId, 
  stopName, 
  onPress, 
  onRemove,
  lastUpdated 
}) => {
  return (
    <TouchableOpacity
      className="bg-white rounded-lg p-4 mb-3 shadow-sm border border-gray-100"
      onPress={() => onPress(stopId)}
      activeOpacity={0.7}
    >
      <View className="flex-row justify-between items-center">
        <View className="flex-1">
          <View className="flex-row items-center mb-1">
            <MapPin size={16} color="#6B7280" />
            <Text className="font-semibold text-gray-800 ml-2 flex-1" numberOfLines={2}>
              {stopName || `Parada ${stopId}`}
            </Text>
          </View>
          <Text className="text-gray-500 text-sm">Código: {stopId}</Text>
          {lastUpdated && (
            <Text className="text-gray-400 text-xs mt-1">
              Última consulta: {lastUpdated}
            </Text>
          )}
          <Text className="text-blue-500 text-sm mt-2 font-medium">
            Toca para ver tiempos
          </Text>
        </View>
        
        <View className="flex-row items-center ml-3">
          <TouchableOpacity
            className="bg-red-50 rounded-lg p-2 mr-2"
            onPress={() => onRemove(stopId)}
            activeOpacity={0.7}
          >
            <Trash2 size={18} color="#EF4444" />
          </TouchableOpacity>
          <View className="bg-yellow-50 rounded-lg p-2">
            <Star size={20} color="#FFC107" fill="#FFC107" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FavoriteStopCard;