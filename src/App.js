import React,{ Component } from 'react';

import { Cards, Chart, CountryPicker } from './components';

import { fetchData } from './api';

import styles from './App.module.css'

import covid19 from './covid19.png'

class App extends Component {
    state = {
      data: {},
      country: '', 
    }

   async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({data: fetchedData});
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country: country});
    }
    render(){
        const { data,country } = this.state;
        return(
            <div className={styles.container}>
            <img className={styles.image} src={covid19} alt="covid19" />
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }

}

export default App;