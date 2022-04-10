import { View, Text } from 'react-native'
import React from 'react'

import { useState } from 'react'
import { EthPrice,NFTTitle } from './SubInfo'
import { COLORS, SIZES ,FONTS } from '../constants'

const DetailsDesc = ( {data} ) => {
  const [text, settext] = useState(data.description.slice(0,100))
  const [readMore, setreadMore] = useState(false)

  return (
    <>
    <View style={{
      width: '100%' ,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center' ,
    }}>
     <NFTTitle 
     title={data.name}
     subTitle={data.creator}
     titleSize={SIZES.extraLarge}
     subTitleSize={SIZES.font}

     
     />

     <EthPrice
     price={data.price}
     />
    
    </View>

    <View style={{
      marginVertical: SIZES.extraLarge * 1.5
    }}>
      <Text style={{
        fontSize: SIZES.font ,
        fontFamily: FONTS.semiBold,
        color: COLORS.primary,
      }}>
        Description
      </Text>

      <Text style={{
        fontSize: SIZES.small ,
        fontFamily: FONTS.regular,
        color: COLORS.secondary,
        lineHeight: SIZES.large ,
      }}>
        {text}
        {!readMore && '...'}
        <Text style={{
           fontSize: SIZES.small ,
           fontFamily: FONTS.semiBold,
           color: COLORS.primary,
        }}
        onPress={() => {
          if(!readMore) {
            settext(data.description)
            setreadMore(true)
          }
          else {
            settext(data.description.slice(0,100))
            setreadMore(false)

          }
          
        }}
        >
          {readMore ? 'Show less' : 'Read More'}
        </Text>
      </Text>


    </View>
  </>  
  )
}

export default DetailsDesc