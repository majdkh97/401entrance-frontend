import React, { Component } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';
const server = process.env.Server_URL;

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrDrink: [],
        }
    }

    componentDidMount = async (req, res) => {
        await axios.get(`http://localhost:3040/drinks`).then(response => {
            this.setState({
                arrDrink:response.data
            })
        })
    }

     addToFavorite(item) {
        const reqbody ={
            name:item.strDrink,
            img_path:item.strDrinkThumb
        }
        axios.post(`http://localhost:3040/favorite`,reqbody)
        console.log(reqbody)
    }


    render() {

        return (
            <div>
                {
                    this.state.arrDrink.map(item => {
                        return (
                            <Card style={{ width: '18rem' }} >
                                <Card.Img variant="top"src={`${item.strDrinkThumb}`} />
                                <Card.Body>
                                    <Card.Title>{`${item.strDrink}`}</Card.Title>

                                    <Button variant="primary" onClick={()=> this.addToFavorite(item)} >Add to Favorite</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
        )
    }
}

export default Home
