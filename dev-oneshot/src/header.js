import React from 'react';


class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div className="header">
        <button onClick={this.props.getRandomEnemy}> get random enemy </button>
        <button onClick={this.props.seeAll}> see all </button>
        </div>);
    }
}

export default Header;
