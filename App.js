import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './appProject/Header';
import Categories from './appProject/Categories';
import OngoingTask from './appProject/OngoigTask';
import Search from './appProject/Search';


export default function App() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
          <Header />
          <Search/>
          <Categories />
          <OngoingTask/>
      </SafeAreaView>
    </ScrollView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    padding:20,
    paddingTop:30
  },
});
