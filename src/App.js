import React, { useState } from 'react';



import Navbar from './componenets/Navbar';
import Text from './componenets/Text';
import Alert from './componenets/Alert';
// import About from './componenets/About';

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = ' #031f31';
      showAlert('Dark mode is enabled', 'success');
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode is enabled', 'success');
    }
  };
  

  return (
    <>
    <Navbar tittle="Text Utils" menutext="Home" abouttext="About"mode={mode} toggleMode={toggleMode} /> 
    <Alert alert={alert}/> 
     {/* <About/>  */}
     <Text showAlert={showAlert} mode={mode}/>  
    </>
    
    // // <BrowserRouter>
    //   <Navbar
    //     tittle="Text Utils"
    //     menutext="Home"
    //     abouttext="About"
    //     mode={mode}
    //     toggleMode={toggleMode}
    //   />

    //   <Alert alert={alert} />

    //   // <Routes>
    //     // <Route
    //       // path="/"
    //       // element={<Text showAlert={showAlert} mode={mode} />}
    //     />
    //     <Route path="/about" element={<About />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;