import React from 'react';
import "./listItem.css";


class Image extends React.Component {
    constructor(props) {
        super(props);
        this.imgPath = process.env.PUBLIC_URL + '/images/' + this.props.url;
    }
    render() {
        return <div className="smallImage"> <img src={this.imgPath} /></div>;
    }
}
export default class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="listItem" onClick={() => this.props.details(this.props.item.id)} >
            <Image url={this.props.item.img_src} />
            <div className="itemDescripor"> {this.props.item.name} </div>
            </div>
        );
    }
}
