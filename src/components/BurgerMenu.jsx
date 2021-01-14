import { slide as Menu } from 'react-burger-menu'
import React, {useState , useContext} from "react"
import HeaderLinks from './headerLinks'

const MyContext = React.createContext()

const MyProvider = (props) => {
    const [menuOpenState, setMenuOpenState] = useState(false)
    
    return (
        <MyContext.Provider value={{
            isMenuOpen: menuOpenState,
            toggleMenu: () => setMenuOpenState(!menuOpenState),
            stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen)
          }}>
            {props.children}
          </MyContext.Provider>
    )
}
const Button = () => {
    const ctx = useContext(MyContext)
    return (
      <button onClick={ctx.toggleMenu} className="material-icons">menu</button>
    )
  }

const Navigation = () => {
    const ctx = useContext(MyContext)
  
    return (
      <Menu right
        customBurgerIcon={false}
        isOpen={ctx.isMenuOpen}
        onStateChange={(state) => ctx.stateChangeHandler(state)}
      >
        <HeaderLinks/>
      </Menu>
    )
}

const MenuB = () => {
    return (
      <MyProvider>
          <div className="bm-burger-button"><Button /></div>
          <Navigation />
      </MyProvider>
      
    )
}

export default MenuB;