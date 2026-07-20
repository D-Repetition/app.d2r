import { SVGProps } from 'react'

const Filter = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.2787 17.5V16H13.7115V17.5H10.2787ZM6.404 12.75V11.25H17.5865V12.75H6.404ZM3.5 8V6.5H20.5V8H3.5Z" fill={props.color ?? "#0A0700"} fillOpacity={props.opacity ?? "0.8"}/>
</svg>
  )
}

export default Filter
