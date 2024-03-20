import {useEffect }from 'react'
const useRandomNumber=()=>{
  useEffect(()=>{
    console.log("custom hook")
  })
  const generateRandomNumber=()=>{
    return Math.floor(Math.random()*100)
  }
  return generateRandomNumber;
}
export default useRandomNumber