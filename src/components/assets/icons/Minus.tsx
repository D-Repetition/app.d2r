import { SVGProps } from 'react'

const Minus = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 12.75V11.25H18.5V12.75H5.5Z" fill={props.color ?? "#0A0700"} fillOpacity={props.opacity ?? "0.8"}/>
</svg>
  )
}

export default Minus
