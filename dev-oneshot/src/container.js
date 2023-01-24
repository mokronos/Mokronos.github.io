import React from "react";
import ListItem from "./listItem";
import Detail from "./detail";
import "./container.css";
import Header from "./header";
import {
    getIds,
    getData
} from "./utils";


export default class Container extends React.Component {
    constructor(props){
        super(props);
        this.getRandomEnemy = this.getRandomEnemy.bind(this);
        this.seeAll = this.seeAll.bind(this);
        this.seeDetail = this.seeDetail.bind(this);
        this.state = {cur_id: 1, ids: getIds(this.props.data), page: "all"};
    };
    getRandomEnemy() {
        console.log("get random enemy");
        let random_id = this.state.ids[Math.floor(Math.random() * this.state.ids.length)];
        console.log(random_id);
        this.setState({cur_id: random_id, page: "detail"});
    }
    seeDetail(index) {
        console.log("see detail");
        this.setState({cur_id: index, page: "detail"});
    }
    seeAll() {
        console.log("see all");
        this.setState({page: "all"});
    }
    render() {
        if (this.state.page == "all") {

            const cards = this.props.data.map((item) => 
            <ListItem key={item.id} item={item} details={this.seeDetail} />
            );

            return (
                <div className="wrapper">
                <Header getRandomEnemy={this.getRandomEnemy} seeAll={this.seeAll} />
                <div className="container">
                {cards}
                </div>
                </div>
            );
        }

        if (this.state.page == "detail") {

            return (
                <div className="wrapper">
                <Header getRandomEnemy={this.getRandomEnemy} seeAll={this.seeAll} />
                <Detail item={getData(this.props.data, this.state.cur_id)} />
                </div>)
            ;
    }
}
}
