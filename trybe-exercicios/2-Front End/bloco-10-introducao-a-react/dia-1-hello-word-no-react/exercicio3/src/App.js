import './App.css';
import Header from './Header.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
  <main className="App App-header">
    <section>
      <Header />
      <Content />
    </section>
    <footer>
      <Footer />
    </footer>
  </main>
 );
}

export default App;
