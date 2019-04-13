import React, { PureComponent, Children } from 'react'
import PropTypes from 'prop-types'
const NO_DATA = '--'

function titleCase (str = NO_DATA) {
  if (!str) return str

  str = str.replace(/\s+/g, ' ')
  str = str.replace(/\s+$/, '')

  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.replace(word[0], word[0].toUpperCase()))
    .join(' ')
}

export default class Address extends PureComponent {
  static propTypes = {
    city: PropTypes.string,
    state: PropTypes.string,
    street: PropTypes.string,
    unitNumber: PropTypes.string,
    zipcode: PropTypes.string,
    children: PropTypes.any,
    twoLines: PropTypes.bool,
    sqaPrefix: PropTypes.string
  }

  static defaultProps = {
    city: '',
    state: '',
    street: '',
    unitNumber: '',
    zipcode: ''
  }

  static Street = ({ address, twoLines, style, sqaPrefix }) => {
    const { street, unitNumber } = address
    return <span style={style} data-sqa-id={sqaPrefix + '-Street'}>{street}{unitNumber && ` ${unitNumber}`}{twoLines ? <br /> : ', '}</span>
  }

  static CityStateZip = ({ address, style, sqaPrefix }) => {
    const { city, state, zipcode } = address
    return <span style={style} data-sqa-id={sqaPrefix + '-CityStateZip'}>{city}, {state} {zipcode}</span>
  }

  render () {
    const { street, city, state, zipcode, unitNumber, twoLines, children, sqaPrefix } = this.props
    const formatStreet = titleCase(street)
    const formatState = (state && state.length) ? state.toUpperCase() : NO_DATA
    const formatZip = (zipcode && zipcode.length) ? zipcode.substr(0, 5) : NO_DATA

    return children
      ? (
        <span className='address-component' data-sqa-component-name={sqaPrefix}>
          {Children.map(children, (child) => React.cloneElement(child, {
            style: child.props.style,
            address: {
              city,
              state: formatState,
              street: formatStreet,
              unitNumber,
              zipcode: formatZip
            },
            twoLines
          }))}
        </span>
      )
      : (
        <span className='address-component'>
          <Address.Street address={{ street: formatStreet, unitNumber }} twoLines={twoLines} />
          <Address.CityStateZip address={{ city, state: formatState, zipcode: formatZip }} />
        </span>
      )
  }
}
