import { useState } from 'react';
import FilterButton from '../FilterButton/FilterButton'

export default function Filter({ onFilter }) {
  const [filter, setFilter] = useState('')

  return (
    <section>
      <FilterButton text='Hot' />
      <FilterButton text='Recent' />
      <FilterButton text='Image/Video' />
    </section>
  )
}
