import React from 'react';
import './App.css';
import jsondata from './data.json';

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.imgPath = process.env.PUBLIC_URL + '/images/' + this.props.url;
    }
    render() {
        return <img src={this.imgPath} />;
    }
}
class Box extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="box">
                <h1> {this.props.item.name} </h1>
                <Image url={this.props.item.img_src} />
                <p> {this.props.item.description} </p>
            </div>
        );
    }
}

class Container extends React.Component {
    constructor(props){
        super(props);
        this.state = {curr_data: this.props.data};
        this.getRandomEnemy = this.getRandomEnemy.bind(this);
        this.seeAll = this.seeAll.bind(this);
    };
    getRandomEnemy() {
        console.log("get random enemy");
        this.setState({curr_data: [this.props.data[Math.floor(Math.random() * this.props.data.length)]]});
    }
    seeAll() {
        console.log("see all");
        this.setState({curr_data: this.props.data});
    }
    render() {
        const cards = this.state.curr_data.map((item) => 
            <Box key={item.id} item={item} />
        );
        return (
            <div className="wrapper">
            <button onClick={this.getRandomEnemy}> get random enemy </button>
            <button onClick={this.seeAll}> see all </button>
            {cards}
            </div>)
        ;
    }
}

function App() {
    return (
        <div className="App">
        <Container data={jsondata}/>
        </div>
    );
}

export default App;
