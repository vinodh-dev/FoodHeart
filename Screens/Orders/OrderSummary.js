import React,{useState  }    from 'react';
import {  View,  Text,  Image,  TouchableOpacity,  ScrollView,  ImageBackground, Modal,ToastAndroid,Platform,AlertIOS,} from 'react-native';
import {global} from '../../Styles/global';
import * as Animatable from 'react-native-animatable';
import {useSelector} from 'react-redux';
import {DELIVERY_STATUS} from '../Api/Api'






export default function OrderSummary({route, navigation}) {
  
  const driverId = useSelector((state) => state.loginDetails);
  const {loginData} = driverId;
  const getDriverId = loginData.map((er) => er.refno);
  let getString = getDriverId.toString();
  const [modal ,showModal]=useState(false)
  const {orders_id,customers_name,customers_street_address,products_name,customer_comments } = route.params;

  const myText1 = "Completed"
  const myText2 = "On the Way"
  

 function notifyMessage(msg="Status has been Updated Successfully") {
     if (Platform.OS === 'android') {
     ToastAndroid.show(msg, ToastAndroid.LONG , ToastAndroid.BOTTOM
      
      )
     } else {
     AlertIOS.alert(msg);
     }
   }



const  displayStatus1 = () => {

let statusText1 =myText1
var form = new FormData();
form.append('driver_id',getString);
form.append('order_id', orders_id);
form.append('status_id','2');
form.append('msg', statusText1);
fetch(DELIVERY_STATUS, {
  method: 'POST',
  headers: new Headers({
    'Content-Type': 'multipart/form-data',
  }),
  body: form,
})
  .then((response) => response.json())
  .then((data) => {
     showModal(false)
      navigation.goBack('Homepage')
   notifyMessage()
 // toast()
   
  })
  .catch((error) => {
    console.error('Errors' + error);
  });


}




const displayStatus2 =()=>{
  let statusText2 =myText2
  showModal(false) 
  var FormData = require('form-data');
  var form = new FormData();
  form.append('driver_id', getString);
  form.append('order_id', orders_id);
  form.append('status_id','5'); 
  form.append('msg', statusText2);
  fetch(DELIVERY_STATUS, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'multipart/form-data',
    }),
    body: form,
  })
    .then((response) => response.json())
    .then((data) => {

       showModal(false) 
      navigation.goBack('Homepage')
   notifyMessage()
     //toast(  )
    })
    .catch((error) => {
      console.error('Errors' + error);
    });







}






  return (
    <View style={global.container}>
      <ScrollView>
        <Animatable.View animation="fadeInDown" iterationCount={1}>
         

         
          <View>
            <ImageBackground
              source={require('../../Assets/Images/ellipse2.png')}
              style={global.ellipsebg1}>
              <Text style={global.titleblack}>
                <Text style={{fontFamily: 'Poppins-Bold', color: '#000'}}>
                  Pickup{' '}
                </Text>
                <Text>Details</Text>
              </Text>
            </ImageBackground>
          </View>

          <View
            style={{
              padding: 30,
              justifyContent: 'center',
              width: '100%',
              alignItems: 'center',
            }}>
            <View style={global.odbox1}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Poppins-Bold',
                  marginBottom: 5,
                }}>
                ID:{orders_id}
              </Text>

              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Poppins-Medium',
                  textTransform: 'capitalize',
                  marginBottom: 10,
                }}>
                {products_name.map((pr) => {
                  return <Text key={pr.id}>{pr.products_name}</Text>;
                })}
              </Text>

              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Poppins-Regular',textTransform:"capitalize",
                  marginTop: -5,
                }}>
                {customers_street_address}
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'absolute',
                  bottom: -50,
                }}>
                <Image source={require('../../Assets/Images/msg-icon.png')} />
                <Image source={require('../../Assets/Images/phone-icon.png')} />
                <Image source={require('../../Assets/Images/map-icon.png')} />
              </View>
            </View>
          </View>

          <View style={global.deliverydtsec}>
            <Text style={global.globalTile}>
              <Text style={{fontFamily: 'Poppins-Bold' ,color:"#000"}}> Delivery </Text> <Text>Details</Text>
            </Text>

            <View style={global.detailBox}>
              <View style={global.detailFlex}>
                <Text style={global.dtTiltle}>Created at:</Text>
                <Text style={global.dtValue}>{products_name.map((pr) =>{
return (
  <Text> {pr.date} {pr.time}  </Text>
)

                })}</Text>
              </View>

              <View style={global.detailFlex}>
                <Text style={global.dtTiltle}>Status:  </Text>
                <Text style={global.dtpickup}>{customer_comments}</Text>
              </View>

              <View style={global.detailFlex}>
                <Text style={global.dtTiltle}>Client:</Text>
                <View style={{flexDirection: 'column', width: '100%'}}>
                  <Text style={global.dtValue}>{customers_name}</Text>
                  <Text style={global.dtValue}>{customers_street_address}</Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'absolute',
                  bottom: -50,
                  left: 0,
                  right: 0,
                }}>
                <Image source={require('../../Assets/Images/msg-icon.png')} />
                <Image source={require('../../Assets/Images/phone-icon.png')} />
                <Image source={require('../../Assets/Images/map-icon.png')} />
              </View>
            </View>

            <View style={{alignItems: 'center'}}>
              <TouchableOpacity  onPress={()=>showModal(true)}>
                <Text style={global.dtBtn}>Delivered</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Modal 
        animationType="fade"
        transparent={true}
        visible={modal}
        
      >

<View style={{backgroundColor:"#00000052" ,flex:1 ,justifyContent:"center" ,padding:20  }}>
<View  style={global.modalwrapper}>

  <View ><Text style={global.StatusTitle}>Please Select Your Status</Text></View>

  <View style={{flexDirection:"row" ,justifyContent:"space-evenly" ,marginTop:20 }}>


  <TouchableOpacity onPress={()=>displayStatus1()}>
  <Text   style={global.statusbuttonType1} >{myText1}</Text>

  </TouchableOpacity>
    
<TouchableOpacity  onPress={()=>displayStatus2()}>
<Text  style={global.statusbuttonType2}  >{myText2}</Text>

</TouchableOpacity>


  </View>
      



  <View style={{flexDirection:"row" ,justifyContent:"flex-end" ,marginTop:20 }}>

    

    <Text onPress={()=>showModal(false)}style={{color:"red"}}>Cancel</Text>

  </View>
      






</View>

  


</View>


     </Modal> 



   



    
</Animatable.View>


        
      </ScrollView>


    </View>
  );
}
