import React from 'react'
import { Image, ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';

export default function Home() {
  return (
    <ScrollView className='bg-gray-50' style={{flex: 1}}>
        <View className=''>

            <View className='h-[150px] bg-emerald-800 pt-2 absolute w-full'>
                <Image
                    className='w-full h-full absolute top-0 left-0 opacity-10'
                    resizeMode="cover"
                    source={require("../../../public/BG1.jpg")}
                />
                <View className='h-[80px] flex-row items-center justify-center pt-5 px-5'>
                    <View className='flex-row items-center justify-between w-full'>
                        <TouchableOpacity className='p-2'>
                            <Icon1 name="arrowleft" size={20} color="#fff" />
                        </TouchableOpacity>
                        <Text className='text-white font-semibold text-xl'>Cricket Live</Text>
                        <TouchableOpacity className='p-2'>
                            <Icon2 name="dots-three-vertical" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View className='px-5 mt-[100px] w-full'>
                <View className='bg-white p-5 rounded-xl'
                    style={{shadowColor:'#000', shadowOffset:{width:0, height:5}, shadowOpacity:0.5, elevation:3}}
                >

                    <Text className='text-center text-gray-400 mb-3'>Match 07 - World Cup ODI 2023</Text>
                    
                    <View className='flex-row items-center justify-between'>
                        <View className='items-center justify-center'>
                            <Image
                                className='w-[80px] h-[80px]'
                                resizeMode="cover"
                                source={require("../../../public/bd.png")}
                            />
                            <Text className='mt-2 text-gray-400'>Bangladesh</Text>
                            <Text className='mt-1 font-bold text-gray-800'>56/4 (19.5 Over.)</Text>
                        </View>
                        <Text className='text-xl text-gray-300 font-bold'>v/s</Text>
                        <View className='items-center justify-center'>
                            <Image
                                className='w-[80px] h-[80px]'
                                resizeMode="cover"
                                source={require("../../../public/AF.png")}
                            />
                            <Text className='mt-2 text-gray-400'>Afganistan</Text>
                            <Text className='mt-1 font-bold text-gray-800'>210/8 (50 Over.)</Text>
                        </View>
                    </View>

                    <View className='mt-5 border-t border-gray-300 pt-2 flex-row items-center justify-center space-x-3'>
                        <View className='h-[30px] w-[30px] rounded-full items-center justify-center border border-gray-300'>
                            <Text className='text-gray-600 font-bold'>2</Text>
                        </View>
                        <View className='h-[30px] w-[30px] rounded-full items-center justify-center border border-gray-300'>
                            <Text className='text-gray-600 font-bold'>0</Text>
                        </View>
                        <View className='h-[30px] w-[30px] rounded-full items-center justify-center border border-blue-300 bg-blue-400'>
                            <Text className='text-white font-bold'>4</Text>
                        </View>
                        <View className='h-[30px] w-[30px] rounded-full items-center justify-center border border-emerald-300 bg-emerald-400'>
                            <Text className='text-white font-bold'>6</Text>
                        </View>
                        <View className='h-[30px] w-[30px] rounded-full items-center justify-center border border-red-300 bg-red-400'>
                            <Text className='text-white font-bold'>NB</Text>
                        </View>
                        <View className='h-[30px] w-[30px] rounded-full items-center justify-center border border-gray-300'>
                            <Text className='text-gray-600 font-bold'></Text>
                        </View>
                    </View>

                </View>
            </View>

            <View className='mt-5 mx-8'>
                {/* //! -- TABLE HEADER -- */}
                <View className='flex-row items-center justify-between mb-3'>
                    <Text className='text-gray-400 font-bold text-left w-[40%] mr-3'>BATSMAN</Text>
                    <Text className='text-gray-400 font-bold text-right w-[8%]'>R</Text>
                    <Text className='text-gray-400 font-bold text-right w-[8%]'>B</Text>
                    <Text className='text-gray-400 font-bold text-right w-[8%]'>4</Text>
                    <Text className='text-gray-400 font-bold text-right w-[8%]'>6</Text>
                    <Text className='text-gray-400 font-bold text-right w-[15%]'>SR</Text>
                </View>
                {/* //! -- TABLE BODY -- */}
                <View className='flex-row items-center justify-between mb-2'>
                    <View className='w-[40%] mr-3 flex-row items-center space-x-2'>
                        <View className='border-1 border-white w-[35px] h-[35px] rounded-full'>
                            <Image
                                className='w-full h-full'
                                resizeMode="cover"
                                source={require("../../../public/sakib.png")}
                            />
                        </View>
                        <View>
                            <Text className='text-gray-900 font-bold text-left'>Sakib Al Hasan</Text>
                            <Text className='text-gray-400 text-xs text-left mt-1'>All Rounder</Text>
                        </View>
                    </View>
                    <Text className='text-gray-900 font-bold text-right w-[8%]'>16</Text>
                    <Text className='text-gray-900 font-bold text-right w-[8%]'>56</Text>
                    <Text className='text-gray-900 font-bold text-right w-[8%]'>2</Text>
                    <Text className='text-gray-900 font-bold text-right w-[8%]'>0</Text>
                    <Text className='text-gray-900 font-bold text-right w-[15%]'>25.61</Text>
                </View>
                <View className='flex-row items-center justify-between mb-2'>
                    <View className='w-[40%] mr-3 flex-row items-center space-x-2'>
                        <View className='border-1 border-white w-[35px] h-[35px] rounded-full'>
                            <Image
                                className='w-full h-full'
                                resizeMode="cover"
                                source={require("../../../public/mashrafe.png")}
                            />
                        </View>
                        <View>
                            <Text className='text-gray-900 font-bold text-left'>Mashrafe Bin Mortaza</Text>
                            <Text className='text-gray-400 text-xs text-left mt-1'>Captain</Text>
                        </View>
                    </View>
                    <Text className='text-gray-900 font-bold text-right w-[8%]'>35</Text>
                    <Text className='text-gray-900 font-bold text-right w-[8%]'>76</Text>
                    <Text className='text-gray-900 font-bold text-right w-[8%]'>5</Text>
                    <Text className='text-gray-900 font-bold text-right w-[8%]'>7</Text>
                    <Text className='text-gray-900 font-bold text-right w-[15%]'>49.17</Text>
                </View>
            </View>

            <View className='mt-5 mx-8'>
                {/* //! -- TABLE HEADER -- */}
                <View className='flex-row items-center justify-between mb-3'>
                    <Text className='text-gray-400 font-bold text-left w-[40%] mr-3'>BOWLERS</Text>
                    <Text className='text-gray-400 font-bold text-right w-[8%]'>O</Text>
                    <Text className='text-gray-400 font-bold text-right w-[8%]'>R</Text>
                    <Text className='text-gray-400 font-bold text-right w-[8%]'>M</Text>
                    <Text className='text-gray-400 font-bold text-right w-[8%]'>W</Text>
                    <Text className='text-gray-400 font-bold text-right w-[15%]'>ECO</Text>
                </View>
                {/* //! -- TABLE BODY -- */}
                <View className='flex-row items-center justify-between mb-2'>
                    <View className='w-[40%] mr-3 flex-row items-center space-x-2'>
                        <View className='border-1 border-white w-[35px] h-[35px] rounded-full'>
                            <Image
                                className='w-full h-full'
                                resizeMode="cover"
                                source={require("../../../public/rashid.png")}
                            />
                        </View>
                        <View>
                            <Text className='text-gray-900 font-bold text-left'>Rashid Khan</Text>
                            <Text className='text-gray-400 text-xs text-left mt-1'>Bowler</Text>
                        </View>
                    </View>
                    <Text className='text-gray-900 font-bold text-right w-[8%]'>4</Text>
                    <Text className='text-gray-900 font-bold text-right w-[8%]'>17</Text>
                    <Text className='text-gray-900 font-bold text-right w-[8%]'>5</Text>
                    <Text className='text-gray-900 font-bold text-right w-[8%]'>3</Text>
                    <Text className='text-gray-900 font-bold text-right w-[15%]'>5.45</Text>
                </View>
            </View>

            <View className='mt-8'>
                <View className='bg-zinc-100 px-8 py-1'>
                    <Text className='text-zinc-600 text-lg font-bold'>Commentary</Text>
                </View>
                
                <View className='flex-row items-center justify-start space-x-5 px-8 py-3 border-b border-gray-200'>
                    <View className='items-center'>
                        <Text className='text-xl text-zinc-500 font-extrabold'>20.6</Text>
                        <View className='h-[28px] w-[28px] mt-2 rounded-full items-center justify-center border border-blue-300 bg-blue-400'>
                            <Text className='text-white font-bold'>4</Text>
                        </View>
                    </View>
                    <View>
                        <Text className='text-gray-500'>
                            <Text className='font-bold text-gray-900'>Lorem Ipsum </Text>
                            is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Text>
                    </View>
                </View>
                
                <View className='flex-row items-center justify-start space-x-5 px-8 py-3 border-b border-gray-200'>
                    <View className='items-center'>
                        <Text className='text-xl text-zinc-500 font-extrabold'>20.5</Text>
                        <View className='h-[28px] w-[28px] mt-2 rounded-full items-center justify-center border border-emerald-300 bg-emerald-400'>
                            <Text className='text-white font-bold'>6</Text>
                        </View>
                    </View>
                    <View>
                        <Text className='text-gray-500'>
                            <Text className='font-bold text-gray-900'>Lorem Ipsum </Text>
                            is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Text>
                    </View>
                </View>
                
                <View className='flex-row items-center justify-start space-x-5 px-8 py-3 border-b border-gray-200'>
                    <View className='items-center'>
                        <Text className='text-xl text-zinc-500 font-extrabold'>20.4</Text>
                        <View className='h-[28px] w-[28px] mt-2 rounded-full items-center justify-center border border-gray-200 bg-gray-100'>
                            <Text className='text-gray-800 font-bold'>1</Text>
                        </View>
                    </View>
                    <View>
                        <Text className='text-gray-500'>
                            <Text className='font-bold text-gray-900'>Lorem Ipsum </Text>
                            is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Text>
                    </View>
                </View>
                
                <View className='flex-row items-center justify-start space-x-5 px-8 py-3 border-b border-gray-200'>
                    <View className='items-center'>
                        <Text className='text-xl text-zinc-500 font-extrabold'>20.3</Text>
                        <View className='h-[28px] w-[28px] mt-2 rounded-full items-center justify-center border border-red-300 bg-red-400'>
                            <Text className='text-white font-bold'>NB</Text>
                        </View>
                    </View>
                    <View>
                        <Text className='text-gray-500'>
                            <Text className='font-bold text-gray-900'>Lorem Ipsum </Text>
                            is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Text>
                    </View>
                </View>
            </View>
            
        </View>
    </ScrollView>
  )
}
