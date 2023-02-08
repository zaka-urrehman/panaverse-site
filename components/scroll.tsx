'use client'
import React from 'react'
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'

export default function Scroll() {
    return (
        <>
            {/* <Stack direction={{base:'column', md:'column', lg:'column'}}> */}

            <Box h={{ base: '800px', md: '600px', lg: '450px' }} w={'90%'} m='auto' pt={{base:'20px',md:'30px',lg:'70px'}}>
                <Flex align={'center'} justify='center'>

                    <Stack direction={{ base: 'column', md: 'column', lg: 'row' }} >
                        <Image src={'/images/logo.png'}
                            height={'200'}
                            width={'500'}
                            alt='Panaverse Dao Logo' />

                        <Text color='#2a0b8a' fontSize={'25px'} fontWeight='bold' py='35px' px={'20px'}>The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</Text>
                    </Stack>
                </Flex>
            </Box>


            <Box mb={'100px'}
                bgGradient={[
                    'linear(to-tr, #6c73d9, #1cc9e475)',
                    'linear(to-t, blue.200, teal.500)',
                    'linear(to-b, orange.100, purple.300)',
                ]}
                borderRadius={'20px'}  h='200px' w='80%' m='auto' mt={{base:'30px',md:'50px',lg:'70px'}} >



                <Text fontWeight={{base:'bold',md:'bold',lg:'bold'}}
                    fontSize={{base:'xl',md:'xl',lg:'3xl'}}
                    color={'black'}
                    fontFamily={'body'}
                    textAlign={'center'}>The Program in a Nutshell: </Text>
                <Text fontWeight={'bold'}
                    fontSize={{base:'2xl',md:'2xl',lg:'3xl'}}
                    color={'#c400c9'}
                    fontFamily={'body'}
                    textAlign={'center'}>Earn While You Learn</Text>
                <Text pt={{base:'3',md:'8',lg:'8'}} px='1'
                    fontSize={{base:'12px',md:'15px',lg:'18px'}}
                    // color={'black'}
                    fontFamily={'body'}
                    textAlign={'center'}>In this brand-new type of curriculum,
                     students will learn how to make money and boost exports 
                     in the classroom and will begin doing so within six months 
                     of the program’s beginning. It resembles a cross between a 
                     corporate venture and an educational project.</Text>

            </Box>



            {/* <Heading  mt={'60px'} mx='45px'  pt={'40px'} textAlign={'center'} fontSize="5xl">Offered Programs</Heading> */}
           
           
            





            {/* </Stack> */}
        </>)
}
