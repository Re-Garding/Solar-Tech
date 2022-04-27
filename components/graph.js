import React, {useState} from 'react';
import { StyleSheet, Switch, Text, View, Dimensions, Scrollview} from 'react-native';
import {LineChart} from 'react-native-chart-kit'




function MyTogg() {
    const [toggle, setToggle] = useState(false);

    return (
        <Switch value={toggle} onValueChange={()=>setToggle(!toggle)}  />
    )
}


function condenseDates(data) {
    const dates = [];
    for (let i = 0; i < 10; i += 1 ) {
        let day = data['data'][i]['date'];
        dates.push(day)
    }
    return dates
}


function condenseCases(data) {
    const cases = [];
    for (let i = 0; i < 30; i += 1 ) {
        let cas = data['data'][i]['cases']['total']['calculated']['population_percent'];
        cases.push(Number(cas));
    }
    return cases
}



function getCovidDataWa() {
    fetch("https://api.covidtracking.com/v2/states/wa/daily.json")
   .then((response) => response.json())
   .then((responseJson) => {
       console.log(responseJson['data']);
   })
   .catch((error) => {
       console.error(error);
   });

    let waData = condenseCases(responseJson)
    let waLabels = condenseDates(responseJson)


}


function MyChart() {

const getData = () => {
    fetch("https://api.covidtracking.com/v2/states/ut/daily.json")
   .then((response) => response.json())
   .then((response) => {
       console.log("********************************************");
       let dat = condenseCases(response);
       let lab = condenseDates(response);

       return lab

   });}


    return (
        <>
          <Text style={styles.header}></Text>
          <LineChart
            data={{
              labels: getData(),
              datasets: [
                {
                  data: [1, 0],
                  strokeWidth: 2,
                },
              ],
            }}
            width={Dimensions.get('window').width - 16}
            height={220}
            chartConfig={{
              backgroundColor: '#1cc910',
              backgroundGradientFrom: '#eff3ff',
              backgroundGradientTo: '#efefef',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            
          />
        </>
      );
    };





export default class Graph extends React.Component {
    
    render() {


        return (
            <View style={styles.container} >
                <MyChart />
                <Text>   </Text>
                <Text>Toggle Between Utah and Washington Stats</Text>
                <MyTogg></MyTogg>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }});