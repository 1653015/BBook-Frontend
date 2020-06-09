import React, { Component } from 'react';
import './SideBar.css';
import Category from './Category/Category';

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
                                    <Category key={item._id} key_data={item._id} category={item.name}/>
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