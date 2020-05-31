import React, { Component } from 'react'
export const BoardContext = React.createContext()
class BoardContextProvider extends Component {
    constructor(){
        super()
        this.state = {
        
        brightTheme:true,
        lightMode: {fontColor:"#1c1604", backgroundMode: "#ffffff", buttonMode:"#e6b00e"},
        darkMode: {fontColor: "#e0e6dc", backgroundMode: '#010300', buttonMode: "#97d479"}
    }
    this.changeMode = this.changeMode.bind(this)
}

changeMode = () =>{
    this.setState({
        brightTheme : !this.state.brightTheme
    })
}
    render() { 
        return ( 
            <div>
                <BoardContext.Provider value={{...this.state, changeMode:this.changeMode}}>
                {this.props.children}
                </BoardContext.Provider>
            </div>
         );
    }
}
export default BoardContextProvider;