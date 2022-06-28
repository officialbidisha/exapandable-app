// Body.js
import './Body.css'
import { useContext } from 'react'
import { ExpandableContext } from './Expandable'

const Body = ({ children , className='',... otherProps}) => {
  const { expanded } = useContext(ExpandableContext);
  const combinedClassName = ['Expandable-panel', className].filter(Boolean).join('');
  return expanded ? 
  <div className ={combinedClassName} {...otherProps} >{children}</div> : null
}
export default Body