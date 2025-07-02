import { useState, useContext } from 'react'
import data from '../../data.json'
import { Card } from './card'
import { FilterContext } from '../contexts/filterContext'

export const CardContainer = () => {
  const [extensions, setExtensions] = useState(data);

  const filterState = useContext(FilterContext);

  let filteredExtensions;

  if (filterState.filter === 'Active') {
    filteredExtensions = extensions.filter(extension => extension.isActive);
  } else if (filterState.filter === 'Inactive') {
    filteredExtensions = extensions.filter(extension => !extension.isActive);
  } else {
    filteredExtensions = extensions;
  }


  return (
    <section className='grid gap-3 md:grid-cols-2 xl:grid-cols-3'>
      {
        filteredExtensions.map(extension =>(
          <Card key={extension.name} setExtensions={setExtensions} extensions={extensions} {...extension} />
        ))
      }
    </section>
  )
}