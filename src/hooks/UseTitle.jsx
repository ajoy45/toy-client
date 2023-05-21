import { useEffect } from "react"

const UseTitle=title=>{
    useEffect(()=>{
        document.title=`Toy||${title}`
    },[title])
    
}
export default UseTitle