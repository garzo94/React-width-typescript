import {useRef, useEffect} from 'react'

export default function DomRef() {
    const inputRef = useRef<HTMLInputElement>(null!) // -->not null and I can remove ? after current inputRef.current?.focus()
    useEffect(()=>{
        inputRef.current.focus()
    },[])
  return (
    <div><input type='text' ref={inputRef}/></div>
  )
}
