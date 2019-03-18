import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Animated,
  TouchableHighlight,
  FlatList,
  TouchableOpacity

} from 'react-native';

// ************* IMPORTANT ***********
//SNEHAL in whichever container you are calling this , set the zIndex of the container to 1 or anything less that what you gave down
//remeber give zindex directly to the container

const noneChar = "None"
export default class DialogListBox extends Component {
    constructor(props) {
      super(props);
      this.state={
          dTitle:"",
          dData:[],
          boxNum:0,
          boxText:""
      };
      this.state.time = new Animated.Value(0);
      this.state.opacity = this.state.time.interpolate({
          inputRange:[200,300],
          outputRange:[0,1],
          extrapolate:'clamp'
      });
      this.state.marginTop = this.state.time.interpolate({
          inputRange:[0,200],
          outputRange:[2500,0],
          extrapolate:'clamp'
      });
      this.data = {
          header:"Choose",
          data:['DWDM','CO','OS','M2','DWDM Lab']
      };
  }
  animateButtonPressed = (data,boxNum) => {
            var {dTitle , dData}=data;
            dData.push(noneChar);
            this.setState({
                dTitle:dTitle,
                dData:dData,
                boxNum:boxNum,
            });
          Animated.timing(this.state.time,{
              toValue:300,
              duration:250,
              useNativeDrive:true
          }).start();
  }
  cancelAnimation=() => {
      Animated.timing(this.state.time,{
          toValue:0,
          duration:300,
          useNativeDrive:true

      }).start(()=>this.setState({
          dTitle:"",
          dData:[],
          boxNum:0,
          boxText:""
      }));
  }
    listItemPressed = (item) => {
       var boxnum = this.state.boxNum;
       this.props.setSub(boxnum,item!=noneChar?item:"");
       this.cancelAnimation();
    }
      componentWillMount(){
          if(this.props.bullRef)
            this.props.bullRef(this);
      }
      componentWillUnmount(){
          if(this.props.bullRef)
            this.props.bullRef(undefined);
      }

  render() {
    return (
        <Animated.View style={[dialogStyles.dialogListBackground,{
            marginTop:this.state.marginTop,
            opacity:this.state.opacity
        }
    ]}  >
            <View style={dialogStyles.centerBox}>
                <View style={dialogStyles.dialogHeader}>
                      <TouchableHighlight onPress = {this.cancelAnimation} underlayColor={"transparent"} activeOpacity={1}>
                          <View style={dialogStyles.cancelButton}><Text style={dialogStyles.xIcon}>X</Text></View>
                      </TouchableHighlight>
                      <View style={dialogStyles.dialogTitle}><Text style={dialogStyles.contentText}>{this.state.dTitle}</Text></View>
                  </View>
                  <View style={dialogStyles.dialogContent}>
                      <FlatList
                      data={this.state.dData}
                      renderItem={({item , index}) =>
                      <TouchableOpacity onPress = {()=>this.listItemPressed(item)} activeOpacity={1}>
                        <View style={dialogStyles.eachContent}><Text style={dialogStyles.contentText}>{item}</Text></View>
                      </TouchableOpacity>
                    }
                      keyExtractor={(item, index) => index.toString()}
                      />
                  </View>
            </View>
        </Animated.View>
    );
  }
}

const dialogStyles = StyleSheet.create({
  dialogListBackground:{
      height:'100%',
      width:'100%',
      backgroundColor:'rgba(52, 52, 52,0.8)',
      position:'absolute',
      justifyContent:'center',
      alignItems:'center',
      zIndex:10,
  },
  centerBox:{
      height:250,
      width:300,
      borderRadius:5,
      borderWidth:1,
      backgroundColor:'white',
      borderColor:'grey',
  },
    dialogHeader:{
        height:55,
        // backgroundColor:'pink',
        flexDirection:'row',
        alignItems:'center',
        // borderBottomWidth:0.5
    },
    dialogContent:{
        flex:1,
        // backgroundColor:'red',
    },
    dialogTitle:{
        flex:1,
        // backgroundColor:'yellow',
        margin:5,
        justifyContent:'center',
        paddingLeft:10
    },
    cancelButton:{
        height:50,
        width:50,
        // backgroundColor:'red',
        // margin:5,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:2
    },
    xIcon:{
        fontSize:30,
        color:'gray'
    },
    eachContent:{
        height:50,
        // backgroundColor:'yellow',
        // margin:2,

        justifyContent:'center',
        padding:2,
        paddingLeft:20
    },
    contentText:{
        fontSize:20,
        color:'gray'
    },
});
