import { SVGProps } from 'react'

const Expand = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.1924L8.11092 17.3033L9.17158 16.2426L12 19.0711L14.8284 16.2426L15.8891 17.3033L12 21.1924ZM14.8284 7.75736L12 4.92893L9.17158 7.75736L8.11092 6.6967L12 2.80761L15.8891 6.6967L14.8284 7.75736Z" fill={props.color} fillOpacity={props.opacity} />
    </svg>
  )
}

export default Expand
