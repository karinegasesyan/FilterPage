import React, { Component } from 'react';

const AppItem = ({ items }) => {
        return (
            <ul>
                {items.map((data,key) => {
                    return (
                        <li>
                            <div className="app-item">
                                <div className="box-info">
                                    <div className="box-info--content">
                                        <div className="description">
                                            <div key={key}>
                                                <h1> {data.name} </h1>
                                                <p> {data.description} </p>
                                            </div>
                                        </div>
                                        <div className="tags">
                                            <span>{data.categories.join(' ' + '/' + ' ')} </span>
                                        </div>
                                    </div>
                                    <div className="box-info--footer">
                                        <ul>

                                                <div>
                                                        {
                                                            (typeof(data.subscriptions) == 'object')?
                                                                <div>
                                                                    {data.subscriptions.map((data, i)=>
                                                                        <li>
                                                                            <span>{data.name}</span>
                                                                            <h3>{data.price}
                                                                                <sup>€</sup>
                                                                            </h3>
                                                                        </li>

                                                                    )}
                                                                </div>
                                                                :null
                                                        }
                                                </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        );
                    })}
            </ul>
        );
};

export default AppItem;