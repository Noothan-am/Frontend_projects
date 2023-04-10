import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { GlobalContext } from './context';
const Sidebar = () => {
  const { sideBar, setSideBar } = GlobalContext();
  return (
    <div
      className={`sidebar-wrapper ${sideBar && 'show'}`}>
      <aside className='sidebar'>
        <button className='close-btn' onClick={() => setSideBar(!sideBar)}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {sublinks.map((sublink, index) => {
            return (
              <>
                <article key={index}>
                  <h4>{sublink.page}</h4>
                  <div className='sidebar-sublinks'>
                    {
                      sublink.links.map((link, index) => {
                        return (
                          <>
                            <a key={index} href={link.url}>
                              {link.icon}
                              {link.label}
                            </a>
                          </>
                        )
                      })
                    }
                  </div>
                </article>
              </>
            )
          })}
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
