import { SVGProps } from 'react'

const Collapse = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.9 19.6538L7.84625 18.6L12 14.4462L16.1538 18.6L15.1 19.6538L12 16.5537L8.9 19.6538ZM12 9.55375L7.84625 5.4L8.9 4.34625L12 7.44625L15.1 4.34625L16.1538 5.4L12 9.55375Z" fill={props.color} fillOpacity={props.opacity} />
</svg>
  )
}

export default Collapse
