import React from 'react'
import "./index.scss"

const SectionTitle = ({title,rengi}) => {
  return (
    <div className="SectionTitle">
        <h4 className={`sectionH4 ${rengi}`}>{title}</h4>
    </div>
  )
}

export default SectionTitle