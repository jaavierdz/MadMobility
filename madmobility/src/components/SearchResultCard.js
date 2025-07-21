import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MapPin, ChevronRight } from 'lucide-react-native';

const SearchResultCard = ({ stop, onPress }) => {
  return (
    <TouchableOpacity
      className="bg-white rounded-lg p-4 mb-3 shadow-sm border border-gray-100"
      onPress={() => onPress(stop.stopId, stop.stopName)}
      activeOpacity={0.7}
    >
      <View className="flex-row justify-between items-center">
        <View className="flex-1">
          <View className="flex-row items-start mb-2">
            <MapPin size={16} color="#3B82F6" className="mt-1" />
            <View className="flex-1 ml-3">
              <Text className="font-semibold text-gray-800 text-base" numberOfLines={2}>
                {stop.stopName}
              </Text>
              <Text className="text-blue-600 text-sm font-medium">
                Código: {stop.stopId}
              </Text>
            </View>
          </View>
          
          {stop.postalAddress && (
            <Text className="text-gray-500 text-sm ml-6" numberOfLines={2}>
              📍 {stop.postalAddress}
            </Text>
          )}
          
          {stop.lines && stop.lines.length > 0 && (
            <View className="flex-row flex-wrap ml-6 mt-2">
              {stop.lines.slice(0, 5).map((line, index) => (
                <View key={index} className="bg-blue-100 rounded-full px-2 py-1 mr-1 mb-1">
                  <Text className="text-blue-700 text-xs font-medium">
                    Línea {line}
                  </Text>
                </View>
              ))}
              {stop.lines.length > 5 && (
                <View className="bg-gray-100 rounded-full px-2 py-1">
                  <Text className="text-gray-600 text-xs">
                    +{stop.lines.length - 5} más
                  </Text>
                </View>
              )}
            </View>
          )}
          
          <Text className="text-green-600 text-sm mt-3 font-medium">
            Toca para ver tiempos
          </Text>
        </View>
        
        <View className="items-center ml-3">
          <View className="bg-blue-50 rounded-full p-2">
            <ChevronRight size={20} color="#3B82F6" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SearchResultCard;