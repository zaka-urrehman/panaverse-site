'use client'
import React from 'react'
import { Box, chakra, Flex, Text,Heading } from '@chakra-ui/react'
import Image from 'next/image'

export default function Card() {
  return (
    <Box  my={'40px'} minH={{base:'1280px', md:'1280px',lg:'500px'}}>
          
        
            <Heading  textAlign={'center'}>Core Courses (Common in All Specializations):</Heading>
            <Box w='80%' h='110px'  rounded='xl' m='auto' my={'20px'} >
                <Flex align={'center'} justify='center' direction={{base:'column',md:'column',lg:'row'}}>
                    <Box m='20px' shadow={'dark-lg'} borderRadius={'15px'}  h='350px' w='300px' overflow={'hidden'}>
                        <Image  src={'/images/card1.jpg'} height={'500'} width={'500'} alt='image'/>
                        <Heading p={'10px'} textAlign='center' fontSize={'30px'}>Quarter 1</Heading>
                        <Text p='15px' textAlign={'center'}>CS-101: Object Oriented Programming Using Typescript</Text>
                    </Box>
                    
                    <Box m='20px' shadow={'dark-lg'} borderRadius={'15px'}  h='350px' w='300px' overflow={'hidden'}>
                        <Image  src={'/images/card2.jpg'} height={'500'} width={'500'} alt=' Image'/>
                        <Heading p={'10px'} textAlign='center' fontSize={'30px'}>Quarter 2</Heading>
                        <Text p='15px' textAlign={'center'}>W2-201: Developing Planet Scale web2.0 Serverless Cloud Apps</Text>
                    </Box>
                    
                    <Box m='20px' shadow={'dark-lg'} borderRadius={'15px'}  h='350px' w='300px' overflow={'hidden'}>
                        <Image  src={'/images/card3.jpg'} height={'500'} width={'500'} alt=' Image'/>
                        <Heading p={'10px'} textAlign='center' fontSize={'30px'}>Quarter 3</Heading>
                        <Text p='15px' textAlign={'center'}>Dollar Making Bootcamp-Full Stack Development</Text>
                    </Box>
                    

                   
                </Flex>

            </Box>
            
        




    </Box>
  )
}
