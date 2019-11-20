import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image } from 'react-native'
import Title from '../components/Title'

export default SingleRestaurant = props => {
   
    return (
        <ScrollView>
            
            <View>
            <Image
                style={{ width: '100%', height: '100%' }}
                source={{
                    uri: 'http://books.google.com/books/content?id=wvU9kjQxUF8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api' 
                }}
            >
            </Image>
                <Text
                >blabla</Text>
            </View>
        </ScrollView>
    )
}