import { StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { NavigationContainer } from '@react-navigation/native';

// Screens
import ProfileScreen from './screens/ProfileScreen';
import PlayScreen from './screens/PlayScreen';
import BookScreen from './screens/BookScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import PasswordScreen from './screens/PasswordScreen';
// import SelectImage from './screens/SelectImage';
import PreFinalScreen from './screens/PreFinalScreen';
// import StartScreen from './screens/StartScreen';
import NameScreen from './screens/NameScreen';
import RegisterScreen from './screens/RegisterScreen';
import VenueInfoScreen from './screens/VenueInfoScreen';
import { AuthContext } from '../../AuthContext';
import EditProfileScreen from './screens/EditProfileScreen';
import ViewAssignedTaskScreen from './screens/ViewAssignedTaskScreen';
import TeamDetails from './screens/TeamDetails';
import ViewStudentActivityScreen from './screens/ViewStudentActivityScreen';
import StaffScreen from './screens/StaffScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tabs
function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: { backgroundColor: 'white', height: 60 },
                tabBarActiveTintColor: 'green',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    let iconName;
                    if (route.name === 'HOME') {
                        iconName = focused ? "home" : "home-outline";
                        return <Ionicons name={iconName} size={24} color="grey" />;
                    } else if (route.name === 'TASK') {
                        return <SimpleLineIcons name="book-open" size={24} color="grey" />;
                    } else if (route.name === 'PLAY') {
                        return <AntDesign name="addusergroup" size={24} color="grey" />;
                    } else if (route.name === 'PROFILE') {
                        return <Ionicons name="search" size={24} color="grey" />;
                    }
                },
            })}
        >
            <Tab.Screen name="HOME" component={HomeScreen} />
            <Tab.Screen name="TASK" component={BookScreen} />
            {/* <Tab.Screen name="PLAY" component={PlayScreen} /> */}
            <Tab.Screen name="PROFILE" component={ProfileScreen} />
        </Tab.Navigator>
    );
}
function BottomTabsJob() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: { backgroundColor: 'white', height: 60 },
                tabBarActiveTintColor: 'green',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    let iconName;
                    if (route.name === 'HOME') {
                        iconName = focused ? "home" : "home-outline";
                        return <Ionicons name={iconName} size={24} color="grey" />;
                    } else if (route.name === 'TASK') {
                        return <SimpleLineIcons name="book-open" size={24} color="grey" />;
                    } else if (route.name === 'PLAY') {
                        return <AntDesign name="addusergroup" size={24} color="grey" />;
                    } else if (route.name === 'PROFILE') {
                        return <Ionicons name="search" size={24} color="grey" />;
                    }
                },
            })}
        >
            <Tab.Screen name="HOME" component={HomeScreen} />
            <Tab.Screen name="TASK" component={BookScreen} />
            {/* <Tab.Screen name="PLAY" component={PlayScreen} /> */}
            <Tab.Screen name="PROFILE" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

// Authentication Stack
function AuthStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Password" component={PasswordScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Name" component={NameScreen} options={{ headerShown: false }} />
            {/* <Stack.Screen name="Image" component={SelectImage} options={{ headerShown: false }} /> */}
            <Stack.Screen name = "StaffScreen" component={StaffScreen} options={{ headerShown: false }} />
            <Stack.Screen name="PreFinal" component={PreFinalScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

// Main Stack
function MainStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Main" 
                component={BottomTabs} 
                options={{ headerShown: false }} 
            />
            <Stack.Screen 
                name="Venue" 
                component={VenueInfoScreen} 
                options={{ headerShown: false }} 
            />
            <Stack.Screen 
                name="Edit" 
                component={EditProfileScreen} 
                options={{ headerShown: false }} 
            />
            <Stack.Screen 
                name="AssignedTasklist" 
                component={ViewAssignedTaskScreen} 
                options={{ headerShown: false }} 
            />
            <Stack.Screen 
                name="TeamDetails" 
                component={TeamDetails} 
                options={{ headerShown: false }} 
            />
            <Stack.Screen 
                name="ViewPrevTask" 
                component={ViewStudentActivityScreen} 
                options={{ headerShown: false }} 
            />
        </Stack.Navigator>
    );
}
function MainStackJob (){
    return (
        <StackNavigator>
            
            <Stack.Screen 
                name="Main" 
                component={BottomTabsJob} 
                options={{ headerShown: false }} 
            />
            
        </StackNavigator>
    );
}

// Root Navigator
const StackNavigator = () => {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <NavigationContainer>
            {isLoggedIn ? <MainStack /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default StackNavigator;

const styles = StyleSheet.create({});