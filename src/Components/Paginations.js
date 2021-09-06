import React, { Component } from 'react';

class Pagination extends Component {
    render() {
        return (
            <ul className="pagination">
                <li><a href="#">&lt;</a></li>
                <li><a href="#">1</a></li>
                <li className="active"><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">&gt;</a></li>
            </ul>
        );
    }
}

export default Pagination;
