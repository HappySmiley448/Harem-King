// App.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  const [screen, setScreen] = useState('welcome');
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [nsfwEnabled, setNsfwEnabled] = useState(true);

  // Basic validation for age 1-1000
  const validAge = () => {
    const ageNum = Number(userAge);
    return ageNum >= 1 && ageNum <= 1000;
  };

  const handleStart = () => {
    if (userName.trim() === '') {
      alert('Enter your name');
      return;
    }
    if (!validAge()) {
      alert('Age must be between 1 and 1000');
      return;
    }
    setScreen('createGirl');
  };

  if (screen === 'welcome') {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Harem King</Text>
        <Text style={styles.subtitle}>Rule your kingdom of NSFW AI girls</Text>
        <TouchableOpacity style={styles.button} onPress={() => setScreen('register')}>
          <Text style={styles.buttonText}>Enter the Kingdom</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  if (screen === 'register') {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <TextInput
          placeholder="Your Name"
          placeholderTextColor="#aa5777"
          style={styles.input}
          value={userName}
          onChangeText={setUserName}
        />
        <TextInput
          placeholder="Your Age (1-1000)"
          placeholderTextColor="#aa5777"
          style={styles.input}
          value={userAge}
          onChangeText={setUserAge}
          keyboardType="numeric"
          maxLength={4}
        />
        <TouchableOpacity style={styles.button} onPress={handleStart}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  if (screen === 'createGirl') {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Create Your AI Girl</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('To be coded')}
        >
          <Text style={styles.buttonText}>Create Girl (Placeholder)</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert('Chat coming soon')}
          >
            <Text style={styles.buttonText}>Go to Chat (Placeholder)</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setScreen('settings')}
          >
            <Text style={styles.buttonText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  if (screen === 'settings') {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
          <Text style={{ marginRight: 10, color: '#550022', fontWeight: '600' }}>NSFW Mode</Text>
          <TouchableOpacity
            onPress={() => setNsfwEnabled(!nsfwEnabled)}
            style={[
              styles.toggle,
              { backgroundColor: nsfwEnabled ? '#b0004f' : 'gray' },
            ]}
          >
            <Text style={{ color: 'white' }}>{nsfwEnabled ? 'ON' : 'OFF'}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 30 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setScreen('createGirl')}
          >
            <Text style={styles.buttonText}>Back to Create Girl</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Unknown Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20, 
    backgroundColor: '#ffe6f0' // soft pink background
  },
  title: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    marginBottom: 10, 
    color: '#b0004f' // deep rose red
  },
  subtitle: { 
    fontSize: 18, 
    marginBottom: 20, 
    textAlign: 'center', 
    color: '#7a003c' // muted burgundy
  },
  input: {
    borderWidth: 1,
    borderColor: '#d97ca1', // warm pink border
    backgroundColor: '#fff0f5', // lavender blush
    width: '80%',
    padding: 12,
    marginBottom: 15,
    borderRadius: 15,
    color: '#550022', // dark rose text
  },
  toggle: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  button: {
    backgroundColor: '#b0004f',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  }
});