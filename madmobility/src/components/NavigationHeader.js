import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Search, Star, Settings, Bell } from 'lucide-react-native';

const NavigationHeader = ({ 
  currentView, 
  onViewChange, 
  favoritesCount = 0,
  onSettingsPress,
  showNotifications = false,
  onNotificationsPress
}) => {
  const tabs = [
    {
      id: 'search',
      label: 'Buscar',
      icon: Search,
      count: null
    },
    {
      id: 'favorites',
      label: 'Favoritos',
      icon: Star,
      count: favoritesCount
    }
  ];

  return (
    <View>
      {/* Header Principal */}
      <View className="bg-blue-600 pt-12 pb-6 px-4">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-white text-2xl font-bold">EMT Madrid</Text>
            <Text className="text-blue-100 mt-1">
              Tiempos de espera en tiempo real
            </Text>
          </View>
          
          <View className="flex-row">
            {showNotifications && (
              <TouchableOpacity
                className="bg-blue-500 rounded-full p-2 mr-2"
                onPress={onNotificationsPress}
                activeOpacity={0.8}
              >
                <Bell size={20} color="white" />
              </TouchableOpacity>
            )}
            
            <TouchableOpacity
              className="bg-blue-500 rounded-full p-2"
              onPress={onSettingsPress}
              activeOpacity={0.8}
            >
              <Settings size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Navegación por pestañas */}
      <View className="bg-white border-b border-gray-200">
        <View className="flex-row">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = currentView === tab.id;
            
            return (
              <TouchableOpacity
                key={tab.id}
                className={`flex-1 py-4 items-center ${
                  isActive ? 'border-b-2 border-blue-500' : ''
                }`}
                onPress={() => onViewChange(tab.id)}
                activeOpacity={0.7}
              >
                <View className="flex-row items-center">
                  <Icon 
                    size={18} 
                    color={isActive ? '#3B82F6' : '#6B7280'} 
                  />
                  <Text 
                    className={`ml-2 font-medium ${
                      isActive ? 'text-blue-600' : 'text-gray-600'
                    }`}
                  >
                    {tab.label}
                  </Text>
                  {tab.count !== null && tab.count > 0 && (
                    <View className="bg-blue-500 rounded-full min-w-[20px] h-5 justify-center items-center ml-1">
                      <Text className="text-white text-xs font-bold">
                        {tab.count > 99 ? '99+' : tab.count}
                      </Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default NavigationHeader;