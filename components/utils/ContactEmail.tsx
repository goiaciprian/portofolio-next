import { Container, Heading, Hr, Html, Text } from '@react-email/components';
import * as React from 'react';

interface ContactEmailProps {
    from: string;
    name: string;
    content: string;
}

export function ContactEmail({ from, name, content }: ContactEmailProps) {
    return (
        <Html>
            <Container>
                <Container>
                    <Heading as={'h1'}>Received interview</Heading>
                    <Text>From: {from}</Text>
                    <Text>Name: {name}</Text>
                </Container>
                <Hr />
                <Container style={{ margin: '1rem' }}>{content}</Container>
            </Container>
        </Html>
    );
}
