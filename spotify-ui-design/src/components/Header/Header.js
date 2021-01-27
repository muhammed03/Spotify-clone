import React from 'react'
import { ReactComponent as Left } from '../../svgs/chevron.svg'
import { ReactComponent as Right } from '../../svgs/chevron-right.svg'
import './Header.scss'

const Header = () => {
    return (
        <div className="upperNav">
            <div className="upperNav-buttons">
                <button>
                    <Left />
                </button>
                <button>
                    <Right />
                </button>
            </div>
        </div>
    )
}

export default Header