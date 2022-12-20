import React from 'react'
import { Flex, Image } from '@chakra-ui/react'

import SearchInput from './SearchInput'

const Navbar:React.FC = () => {
    // 29:47
    return <>
        <Flex bg='white' height='44px' padding='6px 12px'>
            <Flex align='center'>
                <Image
                    src='images/redditFace.svg'
                    height='30px'
                />

                <Image
                    src='images/redditText.svg'
                    height='46px'
                    display={{ base: 'none', md: 'unset' }}
                />
            </Flex>
            {/* <Directory /> */}
            <SearchInput />
            {/* <RightContext /> */}
        </Flex>
    </>
}

export default Navbar