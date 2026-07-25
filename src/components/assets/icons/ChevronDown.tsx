import { SVGProps } from 'react'

const ChevronDown = (props: SVGProps<SVGSVGElement>) => {
  return (
      <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15.0538L6.34625 9.4L7.4 8.34625L12 12.9463L16.6 8.34625L17.6537 9.4L12 15.0538Z" fill={props.color} fillOpacity={props.opacity} />
      </svg>

  )
}

export default ChevronDown
