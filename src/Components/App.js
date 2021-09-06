import React, { Component } from 'react';
import NavCategories from "./NavCategories";
import SearchBar from "./SearchBar";
import Pagination from "./Paginations";
import AppItem from "./AppItem";
import {appsData} from "../appsData";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: appsData,
            filteredItems: []
        }
    }
    render() {
        const { items, filteredItems } = this.state;
        return (
                <div className="flex-container">
                    <NavCategories onFilter={this.filterList}/>
                    <section className="apps-list">
                        <SearchBar onSearch={this.searchList}/>
                        <AppItem items={filteredItems.length > 0 ? filteredItems : items}/>
                        <Pagination/>
                    </section>
                </div>
        );
    }
    filterList = (filter) => {
        const { items } = this.state;
            const filteredList = items.filter(item => item.categories.includes(filter));
            this.setState({ filteredItems: filteredList });
    };
    searchList = (text) => {
        const {items, filteredItems} = this.state;
        if (text === '') {
            this.setState({filteredItems: items});
        } else {
            const searchedData = items.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
            this.setState({filteredItems: searchedData});
        }
    };
}

export default App;
