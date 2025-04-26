import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import StackNavigator from './src/navigation/StackNavigator'
import { AuthProvider } from './AuthContext'

const App = () => {
  return (
    <AuthProvider>
    <StackNavigator />
  </AuthProvider> 
  )
}

export default App           

const styles = StyleSheet.create({})


// import React, { useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { VictoryPie, VictoryTooltip } from 'victory-native';

// const App = () => {
//   const [selectedSlice, setSelectedSlice] = useState(null);

//   const data = [
//     { x: 'Slice 1', y: 50, color: '#600080' },
//     { x: 'Slice 2', y: 30, color: '#9900cc' },
//     { x: 'Slice 3', y: 20, color: '#c61aff' },
//   ];

//   const handleSlicePress = (event, props) => {
//     setSelectedSlice(props.index === selectedSlice ? null : props.index);
//   };

//   return (
//     <View style={styles.container}>
//       <VictoryPie
//         data={data}
//         colorScale={data.map((slice) => slice.color)}
//         radius={({ datum }) => (selectedSlice === datum.index ? 150 : 120)}
//         innerRadius={50}
//         padAngle={2}
//         events={[
//           {
//             target: 'data',
//             eventHandlers: {
//               onPressIn: handleSlicePress,
//             },
//           },
//         ]}
//         labelComponent={
//           <VictoryTooltip
//             renderInPortal={false}
//             flyoutStyle={{ fill: 'white', stroke: 'gray', strokeWidth: 1 }}
//           />
//         }
//         labels={({ datum }) =>
//           selectedSlice === datum.index ? `${datum.x}: ${datum.y}%` : ''
//         }
//       />

//       {selectedSlice !== null && (
//         <View style={styles.detailsContainer}>
//           <Text style={styles.detailsText}>
//             {data[selectedSlice].x}: {data[selectedSlice].y}%
//           </Text>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   detailsContainer: {
//     marginTop: 20,
//     padding: 10,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 5,
//   },
//   detailsText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default App;