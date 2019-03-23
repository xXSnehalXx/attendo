/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity
} from 'react-native';

export default class AttConfView extends Component {

    constructor(props){
        super(props);
        const {navigation} = props;
        var data = navigation.getParam("data",{});
        this.state={
            absCount:data.absCount,
            presCount:data.presCount,
            absentRolls:data.absentRolls,
            date:data.date,
            subject:data.subject,
            bys:data.bys,
            id:data.id,
            attendance:data.attendance,
            n:data.n,
            goBackFromSelViewKey:data.goBackFromSelViewKey
        };
    }

    segueToAbsenteesView=()=>{
        if(this.state.absCount!=0)
            this.props.navigation.navigate('AbsentView',{
                rolls:this.state.absentRolls
                })
    }
    segueToFacCodeView=()=>{
        var x = this.state;
        this.props.navigation.navigate('FacCodeView',{
            date:x.date,
            subject:x.subject,
            attendance:x.attendance,
            id:x.id,
            bys:x.bys,
            n:x.n,
            goBackFromSelViewKey:x.goBackFromSelViewKey
            });
    }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.b1}>
            <View style={styles.b1b}>
                <View style={styles.b1bb}><Text style={styles.t1}>ID</Text></View>
                <View style={styles.b1bb}><Text style={styles.t1}>Date</Text></View>
                <View style={styles.b1bb}><Text style={styles.t1}>Period</Text></View>
                <View style={styles.b1bb}><Text style={styles.t1}>Class</Text></View>
                <View style={styles.b1bb}><Text style={styles.t1}>Presentees</Text></View>
                <View style={styles.b1bb}><Text style={styles.t1}>Absentees</Text></View>
                <View style={styles.b1bb}><Text style={styles.t1}>Check Absentees</Text></View>
            </View>
            <View style={styles.b1b}>
                <View style={styles.b1bb}><Text style={styles.t1}>{this.state.id}</Text></View>
                <View style={styles.b1bb}><Text style={styles.t1}>{this.state.date}</Text></View>
                <View style={styles.b1bb}><Text style={styles.t1}>{this.state.subject}</Text></View>
                <View style={styles.b1bb}><Text style={styles.t1}>{this.state.bys}</Text></View>
                <View style={styles.b1bb}><Text style={styles.t1}>{this.state.presCount}</Text></View>
                <View style={styles.b1bb}><Text style={styles.t1}>{this.state.absCount}</Text></View>
                <TouchableOpacity style={{flex:1}} onPress={this.segueToAbsenteesView} activeOpacity={0.8}>
                    <View style={styles.b1bb}><Text style={[styles.t1,{color:"lightblue"}]}>Check</Text></View>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.b2}>
            <TouchableOpacity onPress={this.segueToFacCodeView} activeOpacity={1}>
                <View style={styles.nextButton}><Text style={[styles.buttText,{color:"lightblue"}]}>Next</Text></View>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white'
    },
    b1:{
        flex:5,
        // backgroundColor:'blue',
        margin:1,
        flexDirection:'row'
    },
    b2:{
        flex:2,
        // backgroundColor:'blue',
        margin:1,
        alignItems:'center',
    },
    b1b:{
        flex:1,
        // backgroundColor:'pink',
        margin:1
    },
    b1bb:{
        flex:1,
        margin:1,
        // backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    t1:{
        fontSize:17,
        color:'black'
    },
    nextButton:{
        // backgroundColor:'red',
        marginTop:30
    },
    buttText:{
        fontSize:20,
    }
});
