import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utills/MyButton';


class Discount extends Component {

    state= {
        discount_start:0,
        discount_end:30
    }

    porcentage = ()=> {
        if(this.state.discount_start < this.state.discount_end){
            this.setState({
            discount_start: this.state.discount_start + 1
        })
        }
    }

    componentDidUpdate (){
        setTimeout(()=>{
            this.porcentage()
        },30)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade onReveal={()=> this.porcentage()}>
                        <div className="discount_porcentage">
                            <span>{this.state.discount_start}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className="discount_description">
                        <h3>Purchase ticket before 20th December</h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor tempus mollis. Curabitur et pharetra purus. Nulla vitae erat eu arcu faucibus pretium sit amet hendrerit lectus. Vestibulum scelerisque pharetra posuere. Nunc tempor vestibulum justo in luctus. 
                        </p>

                        <div>
                            <MyButton
                            text="Purchase Tickets"
                            bck="#ffa800"
                            color="#ffffff"
                            link="http://facebook.com"
                            />
                        </div>
                        </div>
                    </Slide>
                </div>               
            </div>
        );
    }
}

export default Discount;