import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native'; 

const{ width } = Dimensions.get('window')
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';

import ProfileCard from '../component/ProfileCard';
import StoreCard from '../component/StoreCard';
import AboutCard from '../component/AboutCard';
import ProductCard from '../component/ProductCard';
import BrandCard from '../component/BrandCard';

const RetailerHome =() => {
        return ( 

            <ScrollView style={{ flexDirection: 'column', margin: 16 }}
                        showsVerticalScrollIndicator ={false}>
                   
                        <View style={{ flexDirection: 'row', position: 'absolute', top: 60 }}>
                            <Text style={{ fontWeight: '700', fontStyle: 'normal', fontSize: 24, lineHeight: 36}}>My Profile</Text>
                            <Icon name= "cart-outline" size={30} style={{ left: 0.35*width  }} onPress={() => console.log('hello')} ></Icon>
                            <Icon name= "search-outline" size={30} style={{ left:0.40*width }} onPress={() => console.log('hello')} ></Icon>
                            <View>
                                <Image source={require("../assets/images/portrait1.jpg")}
                                       style={{borderRadius: 40, height: 35, width: 35, left: 0.43*width}} />
                            </View>
                        </View>
                    
                        <View>
                            <View style={{ position: 'relative' , top: 130 }}>
                                <ProfileCard 
                                    image= {require("../assets/images/Rectangle421.png")}
                                    title= "Swathika Traders"
                                    type= "Retailer"
                                    outlet= "Tail Fashion"
                                    name= "Ramesh"
                                    gst= "1A2S3D4F5G6H7" />
                            </View> 
                        </View>

                        <View>
                            <View style={{ position: 'relative', marginTop: 140}}>
                                <StoreCard
                                    image1={require("../assets/images/Rectangle421.png")}
                                    size= "800 sq.feet"
                                    outlet= "20"
                                    orders= "40" />
                            </View>
                        </View>

                        <View>
                            <View style={{ position: 'relative'}}>
                                <AboutCard />
                            </View>
                        </View>

                        <View>
                            <View style={{ position: 'relative'}}>
                                <Text style={{fontWeight: '700', fontStyle: 'normal', fontSize: 16, lineHeight: 24, marginBottom: 15}}>My Brands</Text>

                                    <View style={{justifyContent: 'flex-start' }}>
                                        <Swiper height={325} horizontal={true} showsButtons={false}>
                                            <View style={{height: 300, width: width-32, justifyContent: 'space-around', flexDirection: 'column', alignItems: 'center'}}>
                                                <BrandCard image={require("../assets/images/Rectangle315.png")} />
                                                    <TouchableOpacity >
                                                        <View style={styles.button}>
                                                            <Text style={{color: "#ffffff"}}>Visit</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                            </View>
                                            <View style={{height: 300, width: width-32, justifyContent: 'space-around', flexDirection: 'column', alignItems: 'center'}}>
                                                <BrandCard image={require("../assets/images/Rectangle430.png")} />
                                                <TouchableOpacity >
                                                        <View style={styles.button}>
                                                            <Text style={{color: "#ffffff"}}>Visit</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                            </View>
                                        </Swiper>
                                    </View>
                            </View>
                        </View>

                        <View>
                            <View style={{ position: 'relative'}}>
                                <ProductCard />
                            </View>
                        </View>                        
            </ScrollView>
        );
    };

const styles= StyleSheet.create({
    button: {
        backgroundColor: "#444eed",
        marginBottom: 25,
        alignItems: 'center',
        paddingHorizontal: 74,
        paddingVertical: 9,
        borderRadius: 16,
        width: width/5,
        height: 40,
    },
});

export default RetailerHome;