import { View,Image, StyleSheet, Platform } from 'react-native';


export default function HomeScreen() {
  return (
   <View>
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome</h1>
      <Image 
        source={require('../../assets/images/WelcomeImage.png')}style={styles.image} />
        <p style={styles.paragraph}>
        Welcome!
        "Discover a seamless and engaging experience with . <br></br>
        Whether you're here to explore, connect, or accomplish your goals, <br></br>
        we've built this platform just for you. <br></br>
        Navigate effortlessly through our intuitive design, <br></br>
        and enjoy features tailored to make your journey simple and enjoyable. <br></br>
        Let’s get started and unlock a world of possibilities together. <br></br>
        Thank you for choosing [App Name]—we’re excited to have you on board!"<br></br>
        </p>
   </div>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1a1a1a',
    textAlign: 'center',
  },
  image: {
    height: 200,
    resizeMode: 'contain',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10, 
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  paragraph: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
  },
});