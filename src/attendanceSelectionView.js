/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  FlatList,
  TouchableHighlight
} from 'react-native';
let data = {
    rolls:[
        "15841A05J9",
        "15841A05K0",
        "15841A05K1",
    ]
}
export default class AttSelView extends Component {

    componentWillMount(){
        this.props.bullRef(this);
    }
    componentWillUnmount(){
        this.props.bullRef(undefined);
    }
    constructor(props){
        super(props);
        const {navigation}=props;
        var rolls = navigation.getParam('rolls',data.rolls);
        var date = navigation.getParam('date',"..");
        var subject = navigation.getParam('subject',"..");
        var bys = navigation.getParam('bys',"..");
        var id = navigation.getParam('id',"..");
        var n = navigation.getParam('n',"..");

        //modify the below attendance for making the attednace to remain if users goes to
        //next view and comes back , if not modified the changes will fuckk off
        var attendance= rolls.map((value,index,ob)=>1);
        this.state={
            rolls:rolls,
            attendance:attendance,
            date:date,
            subject:subject,
            bys:bys,
            unchangedAttendance:attendance,
            id:id,
            n:n,
            goBackFromSelViewKey:navigation.state.key
        };
    }
    nextButtonPressed=() => {
        var att = this.state.attendance;
        var rolls = this.state.rolls;
        var absentees=[];
        var p=0;
        var a=0;

        att.forEach((value,index,ob) => {
            if(value==1)
                p++;
            else {
                a++;
                absentees.push(rolls[index]);
            }
        })

        var dataObject = {
            absCount:a,
            presCount:p,
            absentRolls:absentees,
            date:this.state.date,
            subject:this.state.subject,
            bys:this.state.bys,
            id:this.state.id,
            attendance:att,
            n:this.state.n,
            goBackFromSelViewKey:this.state.goBackFromSelViewKey
        }
        return dataObject;
    }
    changeAttendance = (roll) => {
        var index = this.state.rolls.indexOf(roll)
        var att = Object.assign([],this.state.attendance)
        att[index]=att[index]==1?0:1;
        this.setState({
            attendance:att
        });
    }

  render() {
      return (
      <View style={styles.container}>
        <FlatList
            data={this.state.rolls}
            extraData={this.state}
            renderItem={({item,index}) =><EachRollCell tex={item} select = {this.state.attendance[index]} changeAttendance={this.changeAttendance} />}
            keyExtractor={(item,index)=>index.toString()}
            bounces={false}
        />
      </View>
    );
  }
}
class EachRollCell extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
      <View style={styles.EachRollCell}>
        <TouchableHighlight style={{flex:1}} onPress={() => {
            this.props.changeAttendance(this.props.tex)
        }} underlayColor={"rgba(52,52,52,0.1)"} >
            <View style={styles.cellContainer}>
                <View style={styles.rollnumCell}><Text style={styles.text}>{this.props.tex}</Text></View>
                <View style={styles.tickCell}><Text style={styles.tick}>{this.props.select==1 ? "✓":""}</Text></View>
            </View>
        </TouchableHighlight>
      </View>
  );
}
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'rgba(52, 52, 52,0.5)'
  },
  EachRollCell:{
      height:54,
      backgroundColor:'white',
      margin:0.5,

  },
  cellContainer:{
         flex:1,
      flexDirection:'row',
      justifyContent:'space-between',
  },
  rollnumCell:{
      width:200,
      margin:1,
      justifyContent:'center'
  },
  tickCell:{
      width:55,
      margin:1,
      // backgroundColor:'blue',
      marginRight:15,
      alignItems:'center',
      justifyContent:'center'
  },
  text:{
      fontSize:20,
      color:'black',
      marginLeft:16,
      opacity:Platform.OS=="ios"?0.9:0.8
  },
  tick:{
      fontSize:Platform.OS=="ios"?30:21,
      color:'#41BBD9'
  }
});
