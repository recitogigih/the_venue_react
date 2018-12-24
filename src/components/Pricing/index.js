import React, { Component } from 'react';
import MyButton from '../utills/MyButton';
import Zoom from 'react-reveal/Zoom';


class Pricing extends Component {
    state = {
        prices:[100,125,150],
        positions:['Balcony','Medium','Star'],
        desc:[
            'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet 1',
            'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet 2',
            'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet 3'
        ],
        linkto:[
            'http://google.com',
            'http://google.com',
            'http://google.com',
        ],
        delay:[500,0,500]
    }

    show_boxes =()=> (
        this.state.prices.map((box,i) => (
            <Zoom delay={this.state.delay[i]} key={1}>
            <div className="pricing_item">
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${this.state.prices[i]}</span>
                        <span>{this.state.positions[i]}</span>
                    </div>
                    <div className="pricing_description">
                        {this.state.desc[i]}
                    </div>
                    <div className="pricing_buttons">
                        <MyButton
                            text="Purchase" 
                            bck= "#ffa800" 
                            color= "#fff"  
                            link = {this.state.linkto[i]}                 
                        />
                    </div>
                </div>
            </div>
            </Zoom>
        ))
    )
    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                <h2>Pricing</h2>

                <div className="pricing_wrapper">
                {this.show_boxes()}
                </div>
                </div>
            </div>
        );
    }
}

export default Pricing;