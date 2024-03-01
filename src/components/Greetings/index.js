import {Component} from 'react'
import Tabs from '../Tabs'

import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Greetings extends Component {
  state = {activeTab: languageGreetingsList[0].id}

  onChangeActiveTab = id => {
    this.setState({activeTab: id})
  }

  render() {
    const {activeTab} = this.state
    const languageDetails = languageGreetingsList.find(
      each => each.id === activeTab,
    )
    const {imageUrl, imageAltText} = languageDetails
    return (
      <div className="app-container">
        <h1 className="app-title">Multilingual Greetings</h1>
        <ul className="tab-list">
          {languageGreetingsList.map(each => (
            <Tabs
              key={each.id}
              tabDetails={each}
              isActive={each.id === activeTab}
              onChangeActiveTab={this.onChangeActiveTab}
            />
          ))}
        </ul>
        <img className="language-img" src={imageUrl} alt={imageAltText} />
      </div>
    )
  }
}

export default Greetings
