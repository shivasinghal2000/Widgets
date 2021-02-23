import React from 'react'

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    // if we press ctrl key and then click on icon then it will automatically open it in new tab
    if (event.metaKey || event.ctrlKey) {
      return
    }
    event.preventDefault()
    window.history.pushState({}, '', href)
    const navEvent = new PopStateEvent('popstate')
    window.dispatchEvent(navEvent)
  }
  return <a onClick={onClick} className={className} href={href}>{children}</a>
}

export default Link
