import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Alert,
  ActivityIndicator,
  Linking,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../../AuthContext';
import ApiService from '../../../api/apiServices'; // Your custom API service
import axios from 'axios';

const LoginScreen = () => {
  const [userType, setUserType] = useState('Student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const { setIsLoggedIn, setUserData, setProfileData, setApiClient } = useContext(AuthContext);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter all fields');
      return;
    }

    setLoading(true);

    try {
      if (userType === 'Student') {
        // Student login API
        const loginData = await ApiService.studentLogin({
          api_key: 'efc10cqkr4Ta29EIYolGsAxRiwOBVmDgn3X9e5ZMKzyC8bsv7u',
          email: email,
          pwd: password,
        });

        console.log('Student Login API response:', loginData);

        const loginRes = loginData.data;

        if (loginData.status === 200) {
          setUserData(loginRes);

          const profileData = await ApiService.showStudentProfile({
            api_key: 'efc10cqkr4Ta29EIYolGsAxRiwOBVmDgn3X9e5ZMKzyC8bsv7u',
            user_id: loginRes.User_Details[0].id,
          });

          const profileRes = profileData.data;

          if (profileData.status === 200) {
            setProfileData(profileRes);
            setIsLoggedIn(true);
          } else {
            Alert.alert('Error', profileData.responseMessage || 'Failed to fetch profile data');
          }
        } else {
          Alert.alert('Error', loginData.responseMessage || 'Login failed');
        }
      } else if (userType === 'Staff') {
        // Staff login API (direct axios since it's a separate endpoint)
        const staffLoginData = {
          api_key: 'efc10cqkr4Ta29EIYolGsAxRiwOBVmDgn3X9e5ZMKzyC8bsv7u',
          username: email,
          password: password,
          usertype: '3', // as per your provided payload
        };

        const staffLoginResponse = await axios.post(
          'https://startupworld.in/Webservices/api3.php?action=staff_login',
          staffLoginData
        );

        console.log('Staff Login API response:', staffLoginResponse.data);

        if (staffLoginResponse.data.responseStatus === 200) {
          // Navigate to staff screen
          navigation.navigate('StaffScreen', { staffData: staffLoginResponse.data });
        } else {
          Alert.alert('Error', staffLoginResponse.data.responseMessage || 'Staff login failed');
        }
      }
    } catch (error) {
      console.error('API request failed:', error);
      Alert.alert('Error', 'Network request failed. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const handleForgotPassword = () => {
    Alert.alert(
      'Redirecting',
      'You will be taken to the forgot password page.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: () => Linking.openURL('https://startupworld.in/forgotpassword.php') },
      ]
    );
  };

  return (
    <ImageBackground
      source={require('../../../asset//img//bg.jpg')}
      style={styles.background}
      imageStyle={{ opacity: 0.8 }}
    >
      <Picker
        selectedValue={userType}
        onValueChange={(itemValue) => setApiClient(itemValue)}
        style={styles.picker1}
        mode="dropdown"
      >
        <Picker.Item label="Default" value="apiClient" />
        <Picker.Item label="Test" value="apiClient1" />
        <Picker.Item label="Dev" value="apiClient2" />
      </Picker>

      <View style={styles.container}>
        <Text style={styles.logo}>StartupWorld™</Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>User Type</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={userType}
              onValueChange={(itemValue) => setUserType(itemValue)}
              style={styles.picker}
              mode="dropdown"
            >
              <Picker.Item label="Student" value="Student" />
              <Picker.Item label="Staff" value="Staff" />
            </Picker>
          </View>

          <TextInput
            placeholder={userType === 'Staff' ? "Enter your username" : "Enter your email"}
            style={styles.textInput}
            placeholderTextColor="#666"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            placeholder="Enter your password"
            style={styles.textInput}
            placeholderTextColor="#666"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>LOGIN</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton} onPress={handleRegister}>
            <Text style={styles.secondaryButtonText}>REGISTER</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.forgotPassword} onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  // your existing styles...
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 25,
    padding: 40,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  formGroup: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    color: '#444',
    marginBottom: 8,
    fontWeight: '600',
  },
  pickerContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    backgroundColor: '#f0f0f0',
    color: '#333',
    paddingHorizontal: 10,
  },
  picker1: {
    height: 10,
    backgroundColor: '#f0f0f0',
    color: '#333',
    paddingHorizontal: 10,
    verticalAlign: 50,
    alignContent: 'flex-end'
  },
  textInput: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    color: '#333',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 10,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
  forgotPassword: {
    marginTop: 10,
  },
  forgotPasswordText: {
    color: '#007bff',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
