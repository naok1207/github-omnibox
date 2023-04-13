import React, { lazy, Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Box, Button, Center, ChakraProvider, Container, Flex, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftAddon, Text, Textarea } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";

const setGithubUsername = async (username: string) => {
  await chrome.storage.sync.set({ github: { username } })
}

const getGithubUsername = async () => {
  const result = await chrome.storage.sync.get('github')
  return result.github.username
}

const removeGithubData = async () => {
  await chrome.storage.sync.remove('github')
}

const isJson = (data: string) => {
	try {
		JSON.parse(data);
	} catch (error) {
		return false;
	}
	return true;
}

// const updateGithubUsername = async () => {
//   await chrome.storage.sync.
// }

const Settings = () => {
  const [key, setKey] = useState('github')
  const [val, setVal] = useState('')
  const [searchedKey, setSearchedKey] = useState('')
  const [result, setResult] = useState('')
  const [allData, setAllData] = useState({})

  useEffect(() => {
    (async () => {
      setAllData(await chrome.storage.sync.get())
    })()
  }, [])

  const handleSet = async () => {
    let updateValue = val
    try {
      updateValue = JSON.parse(updateValue)
    } catch (err) {
      console.error(err)
    }
    await chrome.storage.sync.set({ [key]: updateValue })
    console.log({ [key]: updateValue })
  }

  const handleGet = async () => {
    const result = await chrome.storage.sync.get(key)
    setResult(JSON.stringify(result[key]))
    setSearchedKey(key)
  }

  return (
    <ChakraProvider>
      <h1>Settings Page</h1>
      {/* <InputGroup size='sm'>
        <InputLeftAddon children='https://github.com/' />
        <Input placeholder='username' />
      </InputGroup> */}
      <Container>
        <FormControl>
          <FormLabel>key</FormLabel>
          <Input type='text' value={key} onChange={(e) => setKey(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>val</FormLabel>
          <Textarea rows={1} value={val} onChange={(e) => setVal(e.target.value)} />
        </FormControl>
        <Box display='flex'>
          <Button onClick={handleSet}>Set</Button>
          <Button onClick={handleGet}>Get</Button>
        </Box>
        <Box p='5'>
          <Heading as='h3' size='md'>allData</Heading>
          <Text>{ JSON.stringify(allData) }</Text>
        </Box>
        <Box p='5'>
          <Heading as='h3' size='md'> key: {searchedKey} </Heading>
          <Text>{ result }</Text>
        </Box>
      </Container>
    </ChakraProvider>
  );
};

const rootElement = document.getElementById("root")
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement)

root.render(<Settings />)
