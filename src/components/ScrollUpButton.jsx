import React from "react"
import ScrollUpButton from "react-scroll-up-button"
import Arrow from "../../static/icons/arrow.png"

export default class Scroll extends React.Component {
    render () {
        return (

            <ScrollUpButton ContainerClassName="customButton customButtonAtSeven" TransitionClassName="transition">
                <img src={Arrow} alt="arrow"/>
            </ScrollUpButton>
            
        )
    }
}