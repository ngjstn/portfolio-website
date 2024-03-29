import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router}) => {
    return (
        <Box as="main" pb={89}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" /> 
                <link rel="shortcut icon" type="image/png" href="/images/sad_blob.png"/>
                <title>Homepage - Justin Ng</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}> 
                {children}
            </Container>
        </Box>
    )
}

export default Main