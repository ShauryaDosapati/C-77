import React, { Component } from 'react';
import { Text,
     View,
      StyleSheet,
       TouchableOpacity,
        Platform,
         StatusBar,
        SafeAreaView,
    ImageBackground,
Image } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
          
            <View style={Styles.container}>
                <SafeAreaView style={Styles.andriodSafeArea}/>
                <ImageBackground source={require("../assets/bg_image.png")}
                style={styles.backGroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>  ISS Tracker App     </Text>
                    </View>

                    <TouchableOpacity style={styles.routeCard}
                    onPress={()=> this.props.navigation.navigate("ISS Location")}>
                    <Text style={styles.routeText}>     ISS Location     </Text>
<Text style={styles.routeText}>    {"know More  --->"}     </Text>
<Text style={styles.bgDigit}> 1</Text>
<Image source={require("../assets/iss_icon.png")}
style={styles.iconImage}></Image>
                    </TouchableOpacity>


<TouchableOpacity style={styles.routeCard}
onPress={()=> this.props.navigation.navigate("Meteor")}>
<Text style={styles.routeText}>   Meteor    </Text>
<Text style={styles.bgDigit}>  2  </Text>
<Image source={require("../assets/meteor_bg.png")}
style={styles.iconImage}></Image>
</TouchableOpacity>

                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
container:{
    flex:1
},
backgroundImage:{
flex:1,
resizeMode:'cover'
},

routeCard:{
    flex:0.25,
    marginLeft:50,
    marginTop:50,
    marginRight:50
}


    
})