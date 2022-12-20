import React from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

const SearchInput: React.FC = () => {
    // 34:11
    return <>
        <Flex>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<SearchIcon color='gray.300' />}
                />
                <Input
                    height='34px'
                    _hover={{bg: '#fff', border: '1px solid', borderColor: 'blue.500'}}
                    _focus={{outline: 'none', border: '1px solid', borderColor: 'blue.500'}}
                    fontSize='18px'
                    background={{color: 'gray.500'}}
                    placeholder='Search Reddit'
                    _placeholder={{color: 'gray.500'}}
                />
            </InputGroup>
        </Flex>
    </>
}

export default SearchInput