import { useEffect } from "react"

const UseTitle=title=>{
    useEffect(()=>{
        document.title=`KidsCary|${title}`
    },[title])
    
}
export default UseTitle