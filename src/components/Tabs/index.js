import './index.css'

const Tabs = props => {
  const {tabDetails, isActive, onChangeActiveTab} = props
  const {id, buttonText} = tabDetails
  const activeClassName = isActive ? `tab-btn active-tab` : 'tab-btn'

  return (
    <li className="tab-item">
      <button
        type="button"
        className={activeClassName}
        onClick={() => onChangeActiveTab(id)}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default Tabs
