import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';

const LoadingSpinner = ({ 
  message = 'Cargando...', 
  size = 'large',
  color = '#3B82F6',
  showMessage = true,
  fullScreen = false 
}) => {
  const containerStyle = fullScreen 
    ? 'flex-1 justify-center items-center bg-white'
    : 'justify-center items-center py-8';

  return (
    <View className={containerStyle}>
      <ActivityIndicator size={size} color={color} />
      {showMessage && (
        <Text className="text-gray-600 mt-4 text-base font-medium text-center">
          {message}
        </Text>
      )}
    </View>
  );
};

// Componente específico para carga de API
export const APILoadingSpinner = ({ message = 'Consultando tiempos...' }) => (
  <LoadingSpinner 
    message={message}
    color="#3B82F6"
    size="large"
  />
);

// Componente para carga en botones
export const ButtonLoadingSpinner = ({ size = 'small', color = 'white' }) => (
  <ActivityIndicator size={size} color={color} />
);

// Componente para carga de página completa
export const FullScreenLoader = ({ 
  message = 'Preparando la aplicación...', 
  subMessage 
}) => (
  <View className="flex-1 justify-center items-center bg-blue-50">
    <View className="bg-white rounded-xl p-8 shadow-lg mx-8">
      <View className="items-center">
        <ActivityIndicator size="large" color="#3B82F6" />
        <Text className="text-gray-800 mt-4 text-lg font-semibold text-center">
          {message}
        </Text>
        {subMessage && (
          <Text className="text-gray-600 mt-2 text-sm text-center">
            {subMessage}
          </Text>
        )}
      </View>
    </View>
  </View>
);

export default LoadingSpinner;