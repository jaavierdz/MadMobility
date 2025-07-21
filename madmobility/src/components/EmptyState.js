import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Search, Star, Bus, MapPin, Frown } from 'lucide-react-native';

const EmptyState = ({ 
  type, 
  onAction, 
  actionText,
  title,
  description 
}) => {
  const getEmptyStateContent = () => {
    switch (type) {
      case 'no-favorites':
        return {
          icon: <Star size={48} color="#D1D5DB" />,
          title: title || 'Sin paradas favoritas',
          description: description || 'Aún no has guardado ninguna parada como favorita. Busca una parada y añádela a favoritos para acceso rápido.',
          actionText: actionText || 'Buscar paradas',
          actionIcon: <Search size={20} color="white" />
        };
      
      case 'no-results':
        return {
          icon: <Search size={48} color="#D1D5DB" />,
          title: title || 'Sin resultados',
          description: description || 'No encontramos paradas con ese nombre. Intenta con otro término de búsqueda o usa el código numérico de la parada.',
          actionText: actionText || 'Intentar de nuevo',
          actionIcon: <Search size={20} color="white" />
        };
      
      case 'no-buses':
        return {
          icon: <Bus size={48} color="#D1D5DB" />,
          title: title || 'Sin autobuses',
          description: description || 'No hay autobuses programados para esta parada en este momento. Inténtalo más tarde o verifica el código de parada.',
          actionText: actionText || 'Actualizar',
          actionIcon: <View className="transform rotate-45"><Text>🔄</Text></View>
        };
      
      case 'location-error':
        return {
          icon: <MapPin size={48} color="#D1D5DB" />,
          title: title || 'Error de ubicación',
          description: description || 'No pudimos obtener tu ubicación. Verifica los permisos de la app o busca paradas manualmente.',
          actionText: actionText || 'Buscar manualmente',
          actionIcon: <Search size={20} color="white" />
        };
      
      case 'api-error':
        return {
          icon: <Frown size={48} color="#D1D5DB" />,
          title: title || 'Error de conexión',
          description: description || 'No pudimos conectar con los servidores de EMT Madrid. Verifica tu conexión a internet e inténtalo de nuevo.',
          actionText: actionText || 'Reintentar',
          actionIcon: <View className="transform rotate-45"><Text>🔄</Text></View>
        };
      
      default:
        return {
          icon: <Bus size={48} color="#D1D5DB" />,
          title: title || 'Nada por aquí',
          description: description || 'No hay contenido para mostrar en este momento.',
          actionText: actionText || 'Volver',
          actionIcon: null
        };
    }
  };

  const content = getEmptyStateContent();

  return (
    <View className="flex-1 justify-center items-center px-8 py-12">
      <View className="items-center">
        <View className="bg-gray-100 rounded-full p-6 mb-6">
          {content.icon}
        </View>
        
        <Text className="text-xl font-bold text-gray-800 text-center mb-3">
          {content.title}
        </Text>
        
        <Text className="text-gray-600 text-center text-base leading-6 mb-8">
          {content.description}
        </Text>
        
        {onAction && content.actionText && (
          <TouchableOpacity
            className="bg-blue-500 rounded-lg px-6 py-3 flex-row items-center"
            onPress={onAction}
            activeOpacity={0.8}
          >
            {content.actionIcon}
            <Text className="text-white font-semibold ml-2">
              {content.actionText}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

// Componentes específicos para casos comunes
export const NoFavoritesState = ({ onSearchPress }) => (
  <EmptyState 
    type="no-favorites"
    onAction={onSearchPress}
  />
);

export const NoResultsState = ({ onRetryPress, searchTerm }) => (
  <EmptyState 
    type="no-results"
    description={`No encontramos paradas con "${searchTerm}". Intenta con otro término de búsqueda o usa el número de la parada.`}
    onAction={onRetryPress}
  />
);

export const NoBusesState = ({ onRefreshPress }) => (
  <EmptyState 
    type="no-buses"
    onAction={onRefreshPress}
  />
);

export const APIErrorState = ({ onRetryPress }) => (
  <EmptyState 
    type="api-error"
    onAction={onRetryPress}
  />
);

export default EmptyState;