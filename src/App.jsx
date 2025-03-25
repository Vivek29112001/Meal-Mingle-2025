import './App.css'
import Header from './components/Header';
import Body from './components/Body';
// import Body from './components/dummy-Body';


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

export default AppLayout;