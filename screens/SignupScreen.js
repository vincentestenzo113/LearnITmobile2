import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [studentID, setStudentID] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSignup = () => {
    // Implement signup logic here
    if (password !== verifyPassword) {
      // Passwords don't match, handle accordingly
      return;
    }
    // Proceed with signup
    const userData = {
      email,
      password,
      studentID,
      firstName,
      lastName,
    };
    console.log(userData); // Example: You can send this data to your backend for registration
  };

  const isPasswordValid = (pwd) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(pwd);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LEARNIT</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password (6-20 characters, at least one digit, one lowercase, one uppercase)"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Verify Password"
        secureTextEntry
        value={verifyPassword}
        onChangeText={setVerifyPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Student ID"
        value={studentID}
        onChangeText={setStudentID}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Signup" onPress={handleSignup} />
        </View>
        <View style={styles.button}>
          <Button title="Login" onPress={() => navigation.navigate('Login')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF', // Cyan color
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
  },
  button: {
    width: '45%',
  },
});

export default SignupScreen;
