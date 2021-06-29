import React, { Component } from 'react';


class HomeHousing extends Component {
    constructor(props) {
        super(props);
      this.state={}
    }

  

    componentDidMount() {
      
     fetch('.././data.json')
        .then((response) => response.json())
        .then((jsonResponse) => {
            console.log(jsonResponse)
        })
    }
    
   

   

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>

            </div>
        );
    }
}



export default HomeHousing;