import * as React from 'react';
import { View, useWindowDimensions, Text} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';


import Count from './components/count.js';
import Graph from './components/graph.js'
 


const CountRoute = () => (
	<View style={{ flex: 1, backgroundColor: 'white'}}>
  	<Count></Count>
	</View>
);

const GraphRoute = () => (
	<View style={{ flex: 1, backgroundColor: 'lightgrey'}} >
  	<Graph></Graph>
    
	</View>
);
 

export default function TwoTabs() {
  const layout = useWindowDimensions();
 
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
	{ key: 'count', title: 'Count' },
	{ key: 'graph', title: 'Graph' },
  ]);
 
  const renderScene = SceneMap({
	count: CountRoute,
	graph: GraphRoute,
  });
 
  const renderTabBar = props => (
  	<TabBar
     	 {...props}
      	activeColor={'grey'}
      	inactiveColor={'black'}
          style={{marginTop:25,backgroundColor:'lightgreen'}}
  	/>
  );
 
  return (
  	<TabView
      	navigationState={{ index, routes }}
      	renderScene={renderScene}
      	renderTabBar={renderTabBar}
      	onIndexChange={setIndex}
      	initialLayout={{ width: layout.width }}
  	/>
  );
}