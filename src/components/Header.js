import React, { useContext } from 'react'
import { ExpandableContext } from './Expandable'
import './Header.css';
const Header = ({className='', children, ...otherProps}) => {

  const combinedClassName = ['Expandable-trigger',className].filter(Boolean).join('');

  const { toggle } = useContext(ExpandableContext)
  return <button className={combinedClassName} {...otherProps}
  onClick={toggle}>{children}</button>
}
export default Header;