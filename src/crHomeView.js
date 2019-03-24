/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Picker,
  Animated,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native';
const axios = require('axios');
import DialogListBox from './components/dialogListBox.js';
let content = {
    first:['Theory','Lab'],
    second:{
        Theory:['1 hr','2 hr'],
        Lab:['B1','B2','B3'],
    },
    third:{
        Theory:['DWDM','CO','OS','M2','DWDM','CO'],
        Lab:['DWDM Lab','OS Lab','EWS Lab']
    }
};

export default class CrHome extends Component {
    constructor(props){
        super(props);
        this.child={};
        const { navigation } = props;
        this.state={
            sub1:"",
            sub2:"",
            sub3:"",
            first:['Theory','Lab'],
            second:{
                Theory:['1 hr','2 hr'],
                Lab:['B1','B2','B3'],
            },
            subT:[],
            subL:[],
            rolls:[],
            rollsBatch:[],
            date:navigation.getParam('date','...'),
            day:navigation.getParam('day','...'),
            id:navigation.getParam('id','...'),
            sem:navigation.getParam('sem','...'),
            bys:`${navigation.getParam('branch','.')}${navigation.getParam('year','...')}${navigation.getParam('section','...')}`,
            branch:navigation.getParam('branch','...'),
            year:navigation.getParam('year','...'),
            section:navigation.getParam('section','...'),
        };
        this._objc = null;
        this.getRollsInfo();

    }
    getRollsInfo=() => {
          var self = this;
          var rolls=[]
          var rollsBatch = []
          var bys =this.state.bys;
          const params = new URLSearchParams();
          params.append('bys', bys);
          axios({
              method:"post",
              url:"http://atriams.xyz/ios/rollsBatchToCr.php",
              data:params
              })
        .then(function (response) {
          var data = response.data
          // console.log(data);
          data.forEach((value,index,ob) => {
              if(value[bys]!=""){
                  rolls.push(value[bys]);
                  rollsBatch.push(value[`${bys}b`])
              }
          })
          console.log(rolls,rollsBatch);
          self.setState({
              rolls:rolls,
              rollsBatch:rollsBatch
          });
          self.getSubsInfo();
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    getSubsInfo=() => {
        var self = this
        var subT=[]
        var subL = []
        var year = this.state.year;
        var sem = this.state.sem;
        var branch = this.state.branch;
        var bys = branch+year+"-"+sem;
        var bysl = branch+year+"-"+sem+'l';
        const params = new URLSearchParams();
        params.append('year', year);
        params.append('branch', branch);
        params.append('sem', sem);
        axios({
            method:"post",
            url:"http://atriams.xyz/ios/getTimeTable.php",
            data:params
            })
      .then(function (response) {
        var data = response.data
        data.forEach((value,index,ob)=>{

            if(value[bys]!="")
                subT.push(value[bys])
            if(value[bysl]!="")
                subL.push(value[bysl])
        })
        self.setState({
            subT:subT,
            subL:subL
        });
        // console.log(subT,subL);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    setSubjectForSubBox=(boxNum,subText) => {
        if(boxNum!=1)
            this.setState({
               ['sub'+boxNum]:subText
            });
        else
            this.setState({
                sub1:subText,
                sub2:"",
                sub3:""
            });
    }
    subBoxesPressed = (boxNum) => {
        var data={};
        if(boxNum!=1 && this.state.sub1==""){
            Alert.alert("Fill the first field");
        }
        else{
            data = {dTitle:'Choose'};
            switch (boxNum) {
                case 1:
                    data["dData"]=this.state.first;
                    break;
                case 2:
                    data["dData"]=this.state.sub1=="Theory"?this.state.second.Theory:this.state.second.Lab;
                    break;
                case 3:
                    data["dData"]=this.state.sub1=="Theory"?this.state.subT:this.state.subL;
                    break;
            }
            this._objc.animateButtonPressed(data,boxNum);
        }
    }

    nextButtonPressed = () => {
        if((this.state.sub1=="")||(this.state.sub2=="")||(this.state.sub3==""))
            Alert.alert('Fill all fields')
        else {
            //below code is for n
            var n = 0;
            if(this.state.sub2=="1 hr")
                n=1;
            else if(this.state.sub2=="2 hr")
                n=2;
            else
                n=3;
            //below code is for rolls , if its theory send whole rolls , if its Lab then send required batches
            var rolls = [];

            var rollsBatch = this.state.rollsBatch;
            if(this.state.sub1=="Theory"){
                rolls = this.state.rolls;
            }
            else{
                var batch = this.state.sub2.substring(1,2);
                rollsBatch.forEach((value,index,ob)=>{
                    if(value==batch)
                        rolls.push(this.state.rolls[index]);
                    });
            }


            this.props.navigation.navigate('AttSelView',{
                rolls:rolls,
                date:this.state.date,
                subject:this.state.sub3,
                bys:this.state.bys,
                id:this.state.id,
                n:n,
                totalRolls:this.state.rolls
            });
        }


    }
  render() {
      var s = this.state;
    return (
      <View style={styles.container}>
      <DialogListBox bullRef = {(ref) => this._objc = ref} setSub = {this.setSubjectForSubBox} />
        <View style={styles.b}>
            <View style={styles.b1}>
                <View style={styles.b1b}>
                    <View style={styles.b1b1Static}>
                        <View style={styles.b1b1b}><Text style={styles.t1}>ID</Text></View>
                        <View style={styles.b1b1b}><Text style={styles.t1}>Date</Text></View>
                        <View style={styles.b1b1b}><Text style={styles.t1}>Class</Text></View>
                        <View style={styles.b1b1b}><Text style={styles.t1}>Day</Text></View>
                        <View style={styles.b1b1b}><Text style={styles.t1}>Sem</Text></View>
                    </View>
                    <View style={styles.b1b1Dynamic}>
                        <View style={styles.b1b1b}><Text style={styles.t1}>{s.id}</Text></View>
                        <View style={styles.b1b1b}><Text style={styles.t1}>{s.date}</Text></View>
                        <View style={styles.b1b1b}><Text style={styles.t1}>{s.bys}</Text></View>
                        <View style={styles.b1b1b}><Text style={styles.t1}>{s.day}</Text></View>
                        <View style={styles.b1b1b}><Text style={styles.t1}>{s.sem}</Text></View>
                    </View>
                </View>
                <View style={styles.b1bSub} >
                    <View style={[styles.b2b1,{flex:1}]}>
                    </View>
                    <View style={[styles.b2b1,{flex:3}]} >
                        <Text style={styles.periodText}>Select subject</Text>
                        <TouchableOpacity onPress = {()=>this.subBoxesPressed(1)} activeOpacity={1}>
                            <View style={styles.subjectBox}>
                                <Text style={styles.t1}>{this.state.sub1}</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.arrow}>↓</Text>
                        <TouchableOpacity onPress = {()=>this.subBoxesPressed(2)} activeOpacity={1}>
                            <View style={styles.subjectBox}>
                                <Text style={styles.t1}>{this.state.sub2}</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.arrow}>↓</Text>
                        <TouchableOpacity onPress = {()=>this.subBoxesPressed(3)} activeOpacity={1}>
                            <View style={styles.subjectBox}>
                                <Text style={styles.t1}>{this.state.sub3}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            <View style={styles.b2} >
            <TouchableOpacity onPress = {this.nextButtonPressed} activeOpacity={1}>
                    <Text style={styles.nextButton}>Next</Text>
            </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}
//TODO: make some ui changes

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '',
      zIndex:1
  },
    b:{
        flex:1,
        // backgroundColor:'red',
        margin:2,
    },
    b1:{
        flex:3,
        // backgroundColor:'blue',
        margin:2,
        flexDirection:'row'
    },
    b2:{
        flex:1,
        // backgroundColor:'blue',
        margin:2,
        alignItems:'center'
    },
    nextButton:{
        fontSize:19,
        color:'red',
        marginTop:45
    },
    b1b:{
        flex:3,
        // backgroundColor:'red',
        margin:2,
        flexDirection:'row'
    },
    b1bSub:{
        flex:2,
        // backgroundColor:'red',
        margin:2,
    },
    b1b1Static:{
        flex:1,
        // backgroundColor:'yellow',
        margin:2
    },
    b1b1Dynamic:{
        flex:2,
        // backgroundColor:'yellow',
        margin:2
    },
    b1b1b:{
        flex:1,
        margin:2,
        // backgroundColor:'pink',
        justifyContent:'center',
        alignItems:'center'
    },
    t1:{
        fontSize:17,
        color:'black'
    },
    periodText:{
        fontSize:17,
        color:'black',
        marginBottom:18
    },
    b2b1:{
        margin:2,
        // backgroundColor:'pink',
        flex:1,
        alignItems:'flex-start'
        // justifyContent:'space-between'
    },
    subjectBox:{
        height:37,
        width:110,
        backgroundColor:'white',
        borderRadius:8,
        borderWidth:0.8,
        justifyContent:'center',
        alignItems:'center'
    },
    arrow:{
        left:45,
        fontSize:Platform.OS=='ios'?20:35,
        marginTop:Platform.OS=='ios'?10:-7,
        marginBottom:Platform.OS=='ios'?8:1,
        color:'black'
    },
    //below is for the dialogList
});
