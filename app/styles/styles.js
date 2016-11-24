import {
  StyleSheet,NavigationExperimental

} from 'react-native';
const {
	Header: NavigationHeader
} = NavigationExperimental

const styles = StyleSheet.create({
  container: {
		flex: 1,
	},
  navigationHeader: {

		backgroundColor:'#0093c2',

	},
  mainBackgroundImage: {
    marginTop:NavigationHeader.HEIGHT,
    flex:1,
    width:undefined,
    height:undefined,
    backgroundColor : '#44A8DF'
  },
  contentHeader:{
    flex:0.2,
    flexDirection:'row',
    paddingBottom:0,
    paddingTop:15,
    paddingLeft:15,
  },
  contentContainer:{
    flex:1,
    width:null,
    height:null,
  },
  title: {
    flex: 1,
    fontSize:20,
    color:'#D3EBFB',
    width:undefined,
    height:undefined,
    fontFamily: 'Oswald-Bold' ,
    paddingTop:10,
    alignSelf:'center'

  },
  headerStyle : {


  },
  backgroundImage: {
    flex:1,
    margin:20,
    width:undefined,
    height:undefined,
    resizeMode:'stretch',
  }
});
module.exports = styles;
