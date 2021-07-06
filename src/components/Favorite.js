import React, { Component } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';
import UpdateForm from './UpdateForm';

export class Favorite extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrFav: [],
            show:false,
        }
    }

    componentDidMount = async (req, res) => {
        await axios.get(`http://localhost:3040/favorite`).then(response => {
            this.setState({
                arrFav: response.data
            })
        })
    }

    deleteFromFavorite = async (index) => {
        await axios.delete(`http://localhost:3040/favorite/${index}`).then(response=>{
            this.setState({
                arrFav:response.data
            })
        })
        console.log(index)
    }

    handleShow () {
        this.setState({
            show:true
        })
    }

    handleClose(){
        this.setState({
            show:false
        })
    }
    render() {

        return (
            <div>
                {
                    this.state.arrFav.map((item, index) => {
                        return (
                            <Card style={{ width: '18rem' }} >
                                <Card.Img variant="top" src={`${item.img_path}`} alt="" />
                                <Card.Body>
                                    <Card.Title>{`${item.name}`}</Card.Title>

                                    <Button variant="primary" onClick={() => this.deleteFromFavorite(index)} >Delete</Button>

                                    <Button variant="primary" onClick={() => this.handleShow(index)} >Update</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
                {
                    <UpdateForm/>
                    

                }
            </div>
        )
    }
}

export default Favorite
