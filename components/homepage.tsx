'use client'
import React from 'react'
import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'

export default function Homepage() {
    return (<>
    <Stack>
        <Box
        w='100%' bgImage="url('/images/img3.jpg')"
        bgPosition='unset'
        bgSize={'cover'}
        bgRepeat="no-repeat">
            <Box padding={{base:'20' , md:'45' , lg:'56'}}>
                        
                <Text fontSize={{ base: '20px', md: '40px', lg: '50px' }}fontWeight='bold' textAlign={'center'}  color='white'  >
                      Certified Web 3.0 and Metaverse Developer
                
                </Text>
                <Text fontSize={{ base: '18px', md: '38px', lg: '45px' }} fontWeight='bold' textAlign={'center'} color='#d300ff' >
                      
                 A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar
                </Text> 
                <Text pt={{base:'5',md:'10', lg:'15'}} fontSize={{ base: '12px', md: '16px', lg: '19px' }}  textAlign={'center'} textShadow='outline' color={'white'} >
                      
                Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users
                </Text> 

            </Box>

            
        </Box>


    


      

    

    </Stack>

     
        </> )
}
