import React from 'react'
import { ReactComponent as Left } from '../../assets/svgs/chevron.svg'
import { ReactComponent as Right } from '../../assets/svgs/chevron-right.svg'
import { ReactComponent as SearchIcon } from '../../assets/svgs/search.svg'
import { ReactComponent as CloseIcon } from '../../assets/svgs/close.svg'
import './Header.scss'

export default class Header extends React.Component {
    
    state={
        term:'',
        hasSymbol: false
    }

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term})
        console.log(this.state)
        if (term.length > 0){
            this.setState({
                hasSymbol: true
            })
        } else {
            this.setState({
                hasSymbol: false
            })
        }
    }

    render() {
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
                { (window.location.href.substring(window.location.href.lastIndexOf('/') + 1) === 'search') ?  
                <div className="headerCenter">
                        <div className="searchWrapper">
                            <SearchIcon />
                            <input type="text" placeholder="Search for Artists, Songs, or Podcasts" value={this.state.term} onChange={this.onSearchChange} />
                            {this.state.hasSymbol ? <CloseIcon /> : <CloseIcon className="hidden" />}
                        </div>
                </div>
                : null
                }
            </div>
        )
    }
}

