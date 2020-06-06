import React, { Component } from 'react';
import './SideBar.css';

class SideBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        };
    }

    // componentWillMount(){}
    // componentDidMount(){}
    // componentWillUnmount(){}

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}
    openDropdown() {
        this.setState({isOpen: true});
    }

    closeDropdown() {
        this.setState({isOpen: false});
    }

    render() {
        return (
            <div className="SideBar" onMouseLeave={() => this.closeDropdown()}>
                <div className="sidebar-header"
                    onMouseEnter={() => this.openDropdown()}>
                    TẤT CẢ DANH MỤC
                </div>
                {
                    this.state.isOpen ? (
                        <div className="sidebar-body">
                            {
                                this.props.categories.map(item => (
                                    <div key={item._id}>{item.name.toUpperCase()}</div>
                                ))
                            }
                        </div>  
                    ) : (
                        <div/>
                    )
                }
            </div>
        );
    }
}

export default SideBar;