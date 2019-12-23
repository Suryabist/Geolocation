import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDispaly from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {
  state = {lat: null, errorMessage: ''}

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),      
            err =>  this.setState({errorMessage: err.message})
        );
    };

    renderContetn() {

        if(this.state.errorMessage && !this.state.lat){
            return <div>Error:{this.state.errorMessage}</div>
        }

        if (this.state.lat && !this.state.errorMessage) {
            return <SeasonDispaly  lat={this.state.lat}/>
        }
            return <Spinner message="Please allow us for location"/>
        }

    render() {
        return(

            <div className="border red">
                {this.renderContetn()}
            </div>
        );
    }
};
  

ReactDOM.render(
    <App />, document.querySelector('#root')
)