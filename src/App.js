import './App.css'
import { useState } from 'react'
import ButtonsWrapper from './components/Controls/Buttons'
import Premier from './Screens/Premier'
import Deuxieme from './Screens/Deuxieme'
import ScreenWrapper from './components/ScreenWrapper'
import Troisieme from './Screens/Troisieme'

const buttons = [
  {
    label: 'scene 1',
    component: <Premier />
  },
  {
    label: 'scene 2',
    component: <Deuxieme />
  },
  {
    label: 'scene 3',
    component: <Troisieme />
  }
]
function App() {
  const [activeComponent, setActiveComponent] = useState(buttons[0])

  return (
    <div className="mainComponent">
      <ButtonsWrapper
        buttons={buttons}
        setActiveComponent={setActiveComponent}
        activeComponent={buttons.indexOf(activeComponent)}
      />
      <ScreenWrapper>{activeComponent.component}</ScreenWrapper>
    </div>
  )
}

export default App
