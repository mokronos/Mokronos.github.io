import React from 'react';

class BigImage extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.url);
    }
    render() {
        const imgPath = process.env.PUBLIC_URL + '/images/' + this.props.url;
        return <div className="bigImage"> <img src={imgPath}/></div>;
    }
}

export default class Detail extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const statsList = Object.entries(this.props.item.stats).map(([key, value]) => (
            <li key={key.toString()}>{key.toString()}: {value}</li>
        ));
        return (
            <div className='detailContainer'>
            <div className="cardHeader"> {this.props.item.name} </div>
            <div className="boxGrid">
            <BigImage url={this.props.item.img_src} />
            <div className="description">
            <div>Description:</div>
            <div>{this.props.item.description}</div>
            </div>
            <div className="description">
            <div>Description:</div>
            <ul>
            {statsList}
            </ul>
            </div>
            <div className="description">
            <div>Ability:</div>
            <div>{this.props.item.ability.description}</div>
            </div>
            </div>
            </div>
        );
    }
}
