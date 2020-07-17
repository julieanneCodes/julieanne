import React, { useState } from "react"
import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import JSONDataCode from '../content/PagesInfo.json'
import CodeImg from '../../static/images/code3.jpg'
const CodeLayout = () => {

        const [show,setShow] = useState(false)
        const handleClose = () => setShow(false)
        const handleShow = () => setShow(true)
    return (
        <>
        <div className="photosContainer">
            <div className="columnCode columnCodeLite">
                    <Card>
                        <Card.Img variant="top" src={CodeImg}/>
                        <Card.Body>
                            <Card.Title>Julieanne Codes</Card.Title>
                            <Button variant="outline-dark" size="sm" onClick={handleShow} block>See Information</Button>
                        </Card.Body>
                    </Card>
                <Modal show={show} onHide={handleClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Julieanne Codes</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul className="codeList">
                            {JSONDataCode.content.map((data,index) => {
                                return <li key={`content_item_${index}`}>{data.item}</li>
                            })}
                        </ul>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
        </>
    )
}

export default CodeLayout