import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert } from 'react-native';
import axios from 'axios';

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [userPrediction, setUserPrediction] = useState('');

  // Fetch questions from the server
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('https://your-server-url.com/get-questions'); // Replace with your API endpoint
        setQuestions(response.data);
      } catch (error) {
        Alert.alert('Error', 'Failed to fetch questions');
      }
    };

    fetchQuestions();
  }, []);

  // Handle prediction submission
  const submitPrediction = async () => {
    if (!selectedQuestion || !userPrediction) {
      Alert.alert('Error', 'Please select a question and provide your prediction.');
      return;
    }

    const payload = {
      user_id: 'example-user-id', // Replace with actual user ID logic
      question_id: selectedQuestion.id,
      question_text: selectedQuestion.text,
      user_prediction: userPrediction,
      game_id: selectedQuestion.game_id,
    };

    try {
      await axios.post('https://your-server-url.com/submit-prediction', payload); // Replace with your API endpoint
      Alert.alert('Success', 'Your prediction has been submitted!');
      setSelectedQuestion(null);
      setUserPrediction('');
    } catch (error) {
      Alert.alert('Error', 'Failed to submit prediction');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Make Your Predictions</Text>

      <FlatList
        data={questions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20, padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5 }}>
            <Text style={{ fontSize: 18 }}>{item.text}</Text>
            <Button title="Select" onPress={() => setSelectedQuestion(item)} />
          </View>
        )}
      />

      {selectedQuestion && (
        <View style={{ marginTop: 20, padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Selected Question:</Text>
          <Text style={{ fontSize: 16, marginBottom: 10 }}>{selectedQuestion.text}</Text>

          <TextInput
            placeholder="Your Prediction (yes or no)"
            style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 }}
            value={userPrediction}
            onChangeText={(text) => setUserPrediction(text)}
          />

          <Button title="Submit Prediction" onPress={submitPrediction} />
        </View>
      )}
    </View>
  );
}
