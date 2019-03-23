/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import axios from 'axios';

export default class FacCodeView extends Component {
    constructor(props){
        super(props);
        const {navigation} = props;
        this.state={
            facCode:"",
            date:navigation.getParam('date','..'),
            subject:navigation.getParam('subject','..'),
            attendance:navigation.getParam('attendance','..'),
            id:navigation.getParam('id','..'),
            bys:navigation.getParam('bys','..'),
            n:navigation.getParam("n",'..'),
            status:"",
            goBackFromSelViewKey:navigation.getParam('goBackFromSelViewKey','..')
        };
    }
    segueToCrView=() => {
        this.props.navigation.goBack(this.state.goBackFromSelViewKey);

    }
    submitButtonPressed=()=>{
        if(this.state.facCode!=""){
            // var value = `('${this.state.date}','${this.state.subject}'`;
            var n = this.state.n;
            var self = this;
            var value = `('2019-03-23','${this.state.subject}'`;
            this.state.attendance.forEach((val,index,ob)=>{
                value = value+","+(val*n)
                });
            value = value+`,'${this.state.n}','${this.state.facCode}','${this.state.id}')`
            const params = new URLSearchParams();
            params.append('class', this.state.bys);
            params.append('value', value);
            params.append('code',this.state.facCode);
            axios({
                method:"post",
                url:"http://atriams.xyz/ios/insertAttend.php",
                data:params
                })
          .then(function (response) {
              console.log(response)
            if(response.data.error=="false"){
                self.setState({
                facCode:"",
                status:"success"
                });
                setTimeout(self.segueToCrView,1500);
            }
            else
                {
                    self.setState({
                    facCode:"",
                    status:"wrong"
                    });
                }
          })
          .catch(function (error) {
            console.log(error);
          });
        }

    }
  render() {
      var tex = <Text></Text>;
      if(this.state.status =="success")
        tex = <Text style={[styles.buttText,{color:"green"}]}>Attendance taken</Text>
      else if(this.state.status =="wrong")
        tex = <Text style={[styles.buttText,{color:"red"}]}>Wrong password</Text>
    return (
      <View style={styles.container}>
        <View style={styles.box}>
            <View style={styles.row}>
                <Text style={styles.buttText}>Faculty confirmation code</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.b1b2bb}>
                    <TextInput
                      style={{height: 35,fontSize:17}}
                      onChangeText={(text) => this.setState({facCode:text})}
                      value={this.state.facCode}
                      secureTextEntry={true}
                    />
                </View>
            </View>
            <View style={styles.row}>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()} activeOpacity={0.8}>
                <View style={styles.buttTextContainer}><Text style={[styles.buttText,{color:"blue"}]}>Cancel</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.submitButtonPressed} activeOpacity={0.8}>
                <View style={styles.buttTextContainer}><Text style={[styles.buttText,{color:"blue"}]}>Submit</Text></View>
            </TouchableOpacity>
            </View>
            <View style={styles.row}></View>
            <View style={styles.row}>{tex}</View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
          flex: 1,
          backgroundColor: '#C7DEED',
          justifyContent:'center'
      },
      box:{
          height:220,
          // backgroundColor: 'red',
      },
      row:{
          flex:1,
          // backgroundColor: 'blue',
          margin:2,
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-around'
      },
      buttText:{
          fontSize:20,
          color:'black'
      },
      b1b2bb:{
          height:35,
          width:100,
          backgroundColor:"white",
          borderWidth:1,
          paddingLeft:10,
          borderRadius:7
      },

});
