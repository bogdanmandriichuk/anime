
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import {Button} from "react-bootstrap";
import Form from 'react-bootstrap/Form';


function CommentsSection() {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const storedComments = JSON.parse(localStorage.getItem('comments') || '[]');
        setComments(storedComments);
    }, []);

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const newComment = { name, comment };
        const newComments = [...comments, newComment];

        localStorage.setItem('comments', JSON.stringify(newComments));
        setComments(newComments);

        setName('');
        setComment('');
    }

    return (
        <Container>

            <h2>Коментарі</h2>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>
                        <strong>{comment.name}: </strong>
                        {comment.comment}
                    </li>
                ))}
            </ul>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Ім'я</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Введіть ваше ім'я"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="comment">
                    <Form.Label>Коментар</Form.Label>
                    <Form.Control
                        required
                        as="textarea"
                        placeholder="Напишіть щось"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default CommentsSection;