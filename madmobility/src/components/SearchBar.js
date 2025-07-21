import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Search, X, MapPin } from 'lucide-react-native';
import { ButtonLoadingSpinner } from './LoadingSpinner';

const SearchBar = ({ 
  onSearch, 
  loading = false, 
  placeholder = "Código de parada o nombre",
  showLocationButton = false,
  onLocationPress
}) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    if (searchText.trim()) {
      onSearch(searchText.trim());
    }
  };

  const handleClear = () => {
    setSearchText('');
  };

  const handleSubmitEditing = () => {
    handleSearch();
  };

  return (
    <View className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-4">
      <Text className="text-lg font-semibold mb-3 text-gray-800">
        Consultar parada
      </Text>
      
      <View className="flex-row items-center">
        <View className="flex-1 flex-row items-center border border-gray-300 rounded-lg px-4 py-3 mr-3 bg-gray-50">
          <Search size={18} color="#9CA3AF" />
          <TextInput
            className="flex-1 ml-3 text-base text-gray-800"
            placeholder={placeholder}
            placeholderTextColor="#9CA3AF"
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={handleSubmitEditing}
            returnKeyType="search"
            autoCapitalize="none"
            autoCorrect={false}
          />
          {searchText.length > 0 && (
            <TouchableOpacity 
              onPress={handleClear}
              activeOpacity={0.7}
              className="ml-2"
            >
              <X size={18} color="#9CA3AF" />
            </TouchableOpacity>
          )}
        </View>
        
        <TouchableOpacity
          className="bg-blue-500 rounded-lg px-6 py-3 justify-center items-center min-w-[60px]"
          onPress={handleSearch}
          disabled={loading || !searchText.trim()}
          activeOpacity={0.8}
        >
          {loading ? (
            <ButtonLoadingSpinner />
          ) : (
            <Search size={20} color="white" />
          )}
        </TouchableOpacity>
      </View>
      
      {showLocationButton && (
        <TouchableOpacity
          className="flex-row items-center justify-center mt-3 py-2"
          onPress={onLocationPress}
          activeOpacity={0.7}
        >
          <MapPin size={16} color="#3B82F6" />
          <Text className="text-blue-600 ml-2 font-medium">
            Buscar paradas cercanas
          </Text>
        </TouchableOpacity>
      )}
      
      <View className="mt-3 bg-blue-50 rounded-lg p-3">
        <Text className="text-blue-800 text-sm font-medium mb-1">
          💡 Consejos de búsqueda:
        </Text>
        <Text className="text-blue-700 text-xs">
          • Usa el código numérico de la parada (ej: 1234)
        </Text>
        <Text className="text-blue-700 text-xs">
          • Busca por nombre de la parada o calle
        </Text>
        <Text className="text-blue-700 text-xs">
          • Los códigos están en las marquesinas físicas
        </Text>
      </View>
    </View>
  );
};

export default SearchBar;