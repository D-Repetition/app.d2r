import { SVGProps } from 'react'

const School = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 20.5V8.34625L15.6152 3.68275V12.5H16.9615C16.9615 12.0135 17.1347 11.597 17.481 11.2505C17.8273 10.904 18.2437 10.7308 18.73 10.7308C19.2163 10.7308 19.6329 10.904 19.9797 11.2505C20.3266 11.597 20.5 12.0135 20.5 12.5V20.5H3.5ZM5 19H9.5V12.5H14.1155V5.852L5 9.375V19ZM11 19H14.1155V16.3463H15.8845V19H19V14H11V19Z" fill={props.color} fillOpacity={props.opacity}/>
</svg>
  )
}

export default School
