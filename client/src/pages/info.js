import React from 'react'
import axios from 'axios'
import { 
    Center, 
    Button, 
    Text, 
    Image, 
    SimpleGrid, 
    Box,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverArrow,
    PopoverCloseButton
} from '@chakra-ui/react'

const Info = () => {

    const[user, setUser] = React.useState([])
    const[loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        axios.get('http://localhost:5000/info', {withCredentials: true})
        .then((data) => {
            setUser(data.data)
            setLoading(false)
        }).catch((err) => {
            window.location.href = '/'
            setLoading(false)
        })
    })

    const logout = () => window.location.href = 'http://localhost:5000/auth/logout'

    return !loading && (
        <div>
            <Center mt={100} mb={50}>
                <Image borderRadius='full' m={6} src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp?size=128`} />
                <Text fontSize='2xl'>{user.username}#{user.discriminator} | {user.id}</Text>
            </Center>
            <Center>
                <Button mb={50} backgroundColor='#D10000' onClick={logout}>Logout</Button>
            </Center>
            <Center mb={50}>
                <SimpleGrid columns={{sm: 2, md: 5}} spacing='40px'>
                    {user.guilds.map((guild) => (
                        <Popover>
                            <PopoverTrigger>
                                <Box maxW='sm' borderRadius='lg' borderWidth='2px' overflow='hidden'>
                                    <Image boxSize='128px' src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.webp?size=128`} />
                                </Box>
                            </PopoverTrigger>
                            <PopoverContent w='100%'>
                                <PopoverArrow />
                                <PopoverHeader>{guild.name}</PopoverHeader>
                            </PopoverContent>
                        </Popover>
                    ))}
                </SimpleGrid>
            </Center>
        </div>
    )
}

export default Info
