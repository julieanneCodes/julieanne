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
      <button onClick={ctx.toggleMenu}><svg  className="svg" height="1rem" viewBox="0 -53 384 384" width="1rem" xmlns="http://www.w3.org/2000/svg"><path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" fill="#212322"/><path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" fill="#212322"/><path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" fill="#212322"/></svg>
        </button>
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