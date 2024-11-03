import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const TransferForm = ({ show, handleClose, onTransfer }) => {
    const [userId, setUserId] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = () => {
        console.log('Transfer details:', { userId, amount });
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Transfer Funds</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="userId">
                        <Form.Label>User ID</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter User ID"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="amount" className="mt-3">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Transfer
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default TransferForm;
