'use client'
import React from 'react'
import { Box, chakra, Flex, Text, Heading } from '@chakra-ui/react'
import Image from 'next/image'

export default function NextCard() {
    return (
        <Box my={'40px'} >
            <Heading textAlign={'center'}>Specialized Tracks (Quarter 4 and 5)</Heading>
            <Flex align={'center'} justify='center' direction={{base:'column',md:'column',lg:'row'}}>
                <Box m='20px' shadow={'dark-lg'} borderRadius={'15px'} h='500px' w='300px' overflow={'hidden'}>
                    <Image src={'/images/web3.jpg'} height={'500'} width={'500'} alt=' Image' />
                    <Heading p={'10px'} textAlign='center' fontSize={'30px'}>Web3.0 and Metaverse Development</Heading>
                    <Text p='15px' textAlign={'center'}>This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet</Text>
                </Box>

                <Box m='20px' shadow={'dark-lg'} borderRadius={'15px'} h='500px' w='300px' overflow={'hidden'}>
                    <Image src={'/images/network.jpg'} height={'500'} width={'500'} alt=' Image' />
                    <Heading p={'10px'} textAlign='center' fontSize={'30px'}>Network Programmability and automation</Heading>
                    <Text p='15px' textAlign={'center'}>Network programmability focuses on developing and using set of tools to deploy, manage, and troubleshoot a network device.</Text>
                </Box>

                <Box m='20px' shadow={'dark-lg'} borderRadius={'15px'} h='500px' w='300px' overflow={'hidden'}>
                    <Image src={'/images/ai.jpg'} height={'500'} width={'500'} alt=' Image' />
                    <Heading p={'10px'} textAlign='center' fontSize={'30px'}>Artificial Intelligence AI</Heading>
                    <Text p='15px' textAlign={'center'}>The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.</Text>
                </Box>
            </Flex>
            <Flex align={'center'} justify='center' direction={{base:'column',md:'column',lg:'row'}}>
                <Box m='20px' shadow={'dark-lg'} borderRadius={'15px'} h='500px' w='300px' overflow={'hidden'}>
                    <Image src={'/images/iot.png'} height={'500'} width={'500'} alt='Image' />
                    <Heading p={'10px'} textAlign='center' fontSize={'30px'}>Ambient Computing and IoT specialization</Heading>
                    <Text p='15px' textAlign={'center'}>The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter and Embedded Devices.</Text>
                </Box>

                <Box m='20px' shadow={'dark-lg'} borderRadius={'15px'} h='500px' w='300px' overflow={'hidden'}>
                    <Image src={'/images/cloud.jpg'} height={'500'} width={'500'} alt=' Image' />
                    <Heading p={'10px'} textAlign='center' fontSize={'30px'}>Cloud Native</Heading>
                    <Text p='15px' textAlign={'center'}>The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes. Students will learn building, deploying, and managing modern applications in cloud computing environments.</Text>
                </Box>

                <Box m='20px' shadow={'dark-lg'} borderRadius={'15px'} h='500px' w='300px' overflow={'hidden'}>
                    <Image src={'/images/genomics.jpg'} height={'500'} width={'500'} alt=' Image' />
                    <Heading p={'10px'} textAlign='center' fontSize={'30px'}> Genomics  and BioInformatics</Heading>
                    <Text p='15px' textAlign={'center'}>This program focuses on the skills and technologies from computer science and biology to help us better understand and interpret biological data.</Text>
                </Box>
            </Flex>
            


        </Box>
    )
}
