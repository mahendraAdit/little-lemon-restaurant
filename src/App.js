import { Box, useThem, chakra, Grid, GridItem } from '@chakra-ui/react';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';


function App() {
  return (
    <>
      <Grid templateRows={"auto 1fr 60px"} gap={6} minH={'120vh'}>
        <GridItem mt={3} mx={10}>
          <Header />
        </GridItem>
        <GridItem px={10}>
          <Main />
        </GridItem>
        <GridItem bg={"yellow.500"} mb={3} mx={10}>
          <Footer />
        </GridItem>

      </Grid >
    </>

  )
}

export default App;
