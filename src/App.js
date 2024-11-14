import { Box, useThem, chakra, Grid, GridItem } from '@chakra-ui/react';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';


function App() {
  return (
    <>
      <Grid templateRows={"auto 1fr auto"} gap={6}>
        <GridItem mt={30} px={10}>
          <Header />
        </GridItem>
        <GridItem px={10} >
          <Main />
        </GridItem>
        <GridItem bg={"gray"} py={10} px={20} h={'fit-content'} w={'100%'}>
          <Footer />
        </GridItem>

      </Grid >
    </>

  )
}

export default App;
