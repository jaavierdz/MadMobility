import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { MapPin, Star, StarOff, RotateCcw } from 'lucide-react-native';

const StopDetailsHeader = ({ 
  stop, 
  isFavorite, 
  onToggleFavorite, 
  onRefresh, 
  loading 
}) => {
  const handleToggleFavorite = () => {
    Alert.alert(
      isFavorite ? 'Eliminar favorito' : 'Añadir favorito',
      isFavorite 
        ? `¿Quieres eliminar "${stop.stopName}" de tus favoritos?`
        : `¿Quieres añadir "${stop.stopName}" a tus favoritos?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { 
          text: isFavorite ? 'Eliminar' : 'Añadir', 
          onPress: () => onToggleFavorite(stop.id)
        }
      ]
    );
  };

  return (
    <View className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-4">
      <View className="flex-row justify-between items-start mb-4">
        <View className="flex-1">
          <View className="flex-row items-center mb-2">
            <MapPin size={18} color="#6B7280" />
            <Text className="text-xl font-bold ml-2 flex-1" numberOfLines={2}>
              {stop.stopName}
            </Text>
          </View>
          
          <Text className="text-gray-500 text-base mb-1">
            Código: {stop.id}
          </Text>
          
          {stop.address && (
            <Text className="text-gray-400 text-sm" numberOfLines={2}>
              📍 {stop.address}
            </Text>
          )}
          
          <View className="flex-row items-center mt-3">
            <View className="bg-blue-100 rounded-full px-3 py-1">
              <Text className="text-blue-700 text-sm font-medium">
                {stop.lines?.length || 0} líneas
              </Text>
            </View>
            
            {stop.lastUpdated && (
              <Text className="text-gray-400 text-xs ml-3">
                Actualizado: {stop.lastUpdated}
              </Text>
            )}
          </View>
        </View>
        
        <View className="flex-row ml-3">
          <TouchableOpacity
            className="bg-gray-100 rounded-lg p-3 mr-2"
            onPress={onRefresh}
            disabled={loading}
            activeOpacity={0.7}
          >
            <RotateCcw 
              size={20} 
              color={loading ? "#9CA3AF" : "#6B7280"} 
              className={loading ? "animate-spin" : ""}
            />
          </TouchableOpacity>
          
          <TouchableOpacity
            className={`rounded-lg p-3 ${
              isFavorite ? 'bg-yellow-100' : 'bg-gray-100'
            }`}
            onPress={handleToggleFavorite}
            activeOpacity={0.7}
          >
            {isFavorite ? (
              <Star size={20} color="#FFC107" fill="#FFC107" />
            ) : (
              <StarOff size={20} color="#6B7280" />
            )}
          </TouchableOpacity>
        </View>
      </View>
      
      <View className="border-t border-gray-100 pt-3">
        <Text className="text-gray-600 font-medium">
          🚌 Próximos autobuses:
        </Text>
      </View>
    </View>
  );
};

export default StopDetailsHeader;