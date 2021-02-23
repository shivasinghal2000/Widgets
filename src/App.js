import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown'
import Header from './components/Header/Header'
import Route from './components/Route'
import Search from './components/Search'
import Translate from './components/Translation/Translate'

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use react by creating components'
  }
]

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  }
]

const App = () => {
  const [selected, setSelected] = useState(options[0])
  // const [showDropdown, setShowDropDown] = useState(true)
  return (
    <div>
      {/* <button onClick={() => setShowDropDown(!showDropdown)}>Toggle dropdown</button>
      {showDropdown
        ? <Dropdown
            label="Select a Color"
            selected={selected}
            onSelectedChange={setSelected}
            options={options}
          />
        : null} */}
      <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown
          label='Select a Color'
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  )
}

export default App
