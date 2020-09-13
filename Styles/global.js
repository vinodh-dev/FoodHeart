import {StyleSheet} from 'react-native';
//mport { transform } from '@babel/core';
export const global = StyleSheet.create({
  // 1 Login  & Register
  // 2 Orders & History
  // 3 Profile
  // 4 OrderSummary

  // --------- Login  &  Register   Start-----//
  logoSec: {
    alignItems: 'center',
    marginBottom: 25,
    position: 'relative',
  },

  Loginsec: {padding: 30},

  loginContainer: {
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
    backgroundColor: '#ffff',

    paddingTop: 50,
  },
  fieldBox: {
    marginTop: 30,

    width: 550,
    maxWidth: '100%',
    flexDirection: 'column',
  },
  ltbtn: {
    padding: 15,
    backgroundColor: 'red',
    width: 120,
    textAlign: 'center',
    color: '#fff',
    borderRadius: 5,
  },

  fieldlayers: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    paddingLeft: 20,
    backgroundColor: '#fff',

    borderRadius: 4,
    shadowColor: '#00000014',
    fontSize: 16,
    letterSpacing: 1,
    shadowColor: '#00000014',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 11,
    borderRadius: 30,
  },
  iconwrap: {
    marginRight: 8,
  },
  linearGradient: {
    width: 107,
    padding: 11,
    borderRadius: 29,
  },

  // --------- Login  &  Register   End-----//

  //----------- 2 Orders & History  Start------------//
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  tabnavigators: {
    padding: 20,
    flex: 1,
    flexDirection: 'column',
  },

  concatText: {
    flexDirection: 'row',
    alignItems: 'center', marginTop:15
  },

  summarybox: {
    flexDirection: 'row',
    paddingLeft: 20,
    padding: 13,
    borderRadius: 10,paddingRight:4,
    
    maxWidth: '100%',
    marginBottom: 25,
    backgroundColor: '#fff',

    shadowColor: '#8e8e8e00',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 5,
    shadowOpacity: 0.5,
  },

  orderidsec: {
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    color: '#000',
  },

  historyId: {
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    color: '#828282',
  },

  summarydt: {
    flexDirection: 'row',

    marginTop: 14,
  },
  summaryboxflex1: {
    width: '33%',
    paddingRight: 13,
  },
  summaryboxflex2: {
    width: '31%',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 30,
  },
  summaryboxflex3: {
    width: '33.33%',
  },

  summarybtn: {
    padding: 4,
    backgroundColor: '#EE7444',
    color: '#fff',
    borderRadius: 29,
    fontSize: 12,

    textAlign: 'center',
  },
  Historybox: {
    flexDirection: 'row',
    paddingLeft: 20,
    padding: 13, 
    borderRadius: 10, paddingRight:5,

    marginBottom: 25,
    backgroundColor: '#E8E8E8',

    shadowColor: '#00000014',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 11,
  },
  summarydtText: {
    color: '#828282',
    fontSize: 11, textTransform:"capitalize"
  },
  iconWidth:{
    width:11 ,height:13
  },

  Historybtn: {
    borderWidth: 1,
    borderColor: '#EE7444',
    borderRadius: 29,
    color: '#EE7444',
    textAlign: 'center',
    padding: 2, 
    fontSize: 12,

    right: 0,
  },
  summarywraptext: {
    fontSize: 12,
  },
  notFound:{
fontSize:20 
  },

  //----------- 2 Orders & History Ends   ------------//

  // --------- Profile   Start-----//

  profilecol1: {
    backgroundColor: '#fff',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    elevation: 6,
  },

  profilewrap: {
    padding: 40,
  },
  profileName: {
    fontSize: 20,
    color: '#EE7444',
  },
  ellipsebg: {
    width: '100%',
    height: 179,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
  },
  profilecol2: {
    padding: 30,
  },
  profilelists: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  profilelttext: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    color: '#828282',
    paddingLeft: 13,
  },
  // --------- Profile    End's-----//

  // --------- OrderSummary    Start's-----//

  odbox1: {
    backgroundColor: '#fff',
    width: 300,
    alignItems: 'center',
    position: 'relative',
    top: 25,
    borderRadius: 13,
    maxWidth: '100%',
    padding: 20,
    elevation: 4,
    paddingBottom: 50,
  },

  ellipsebg1: {
    width: '100%',
    height: 179,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
  },
  titleblack: {
    color: '#000',
    fontSize: 24,
    paddingLeft: 40,
  },

  globalTile:{
    color: '#000',
    fontSize: 24,
  },



  loadIndicator: {flexDirection:"row" ,justifyContent:"center" ,alignItems:"center" ,flex:1 ,marginTop:20   },


  // --------- OrderSummary    End's-----//
  deliverydtsec: {
    padding: 30,
    marginTop: 23,
  },
  detailBox: {
    backgroundColor: '#fff',
    elevation: 3,
    padding: 30,
    marginTop: 20,
    borderRadius: 10,
    paddingBottom: 50,
    marginBottom: 60,
  },
  detailFlex: {
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center',
    width: '100%',
  },
  dtTiltle: {
    fontSize: 17,
    fontFamily: 'Poppins-Bold',
    width: '40%',
  },
  dtValue: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular', textTransform:"capitalize",
    paddingLeft: 7,
    width: '60%'
  },
  dtpickup: {
    color: '#67D628',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    paddingLeft: 7,
  },
  dtBtn: {
    backgroundColor: '#EC3F70',
    width: 230,
    textAlign: 'center',
    padding: 8,
    borderRadius: 29,
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },

  succesMessage:{     backgroundColor:"#67D628"  ,padding:10 ,borderRadius:6,elevation:5  },

  msgText:{
  textAlign:"center"  ,color:"#fff" ,fontSize:16, fontFamily:"Poppins-Medium" ,letterSpacing:1
  },

  modalwrapper:{
paddingHorizontal:20  ,paddingVertical:20 ,backgroundColor:"#fff" 

  },
  StatusTitle:{
    fontSize:16,
    fontFamily:"Poppins-SemiBold" ,textAlign:"center"
  },

  statusbuttonType1:{
 padding:10 ,backgroundColor:"#67D628",color:"#fff" ,borderRadius:6


  },
  statusbuttonType2:{
    padding:10 ,backgroundColor:"#EE7444",color:"#fff" ,borderRadius:6


  }






});
