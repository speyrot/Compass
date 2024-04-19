// src/components/Dashboard.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Dashboard() {
    return (
        <Container fluid>
            {/* Row 1: Map and Filters */}
            <Row className="mb-3">
                <Col md={2} style={{ backgroundColor: '#f8f9fa', borderRight: '1px solid #dee2e6' }}>
                    {/* Placeholder for Map Filters */}
                    Filters
                </Col>
                <Col md={10} style={{ height: '500px' }}>
                    {/* Placeholder for World Map */}
                    World Map
                </Col>
            </Row>

            {/* Row 2: Shipments Overview */}
            <Row>
                <Col md={4} style={{ backgroundColor: '#f8f9fa', borderRight: '1px solid #dee2e6', minHeight: '300px' }}>
                    {/* Placeholder for Upcoming Shipments */}
                    Upcoming Shipments (Next 7 days)
                </Col>
                <Col md={4} style={{ backgroundColor: '#f8f9fa', borderRight: '1px solid #dee2e6', minHeight: '300px' }}>
                    {/* Placeholder for On The Way Shipments */}
                    On The Way Shipments
                </Col>
                <Col md={4} style={{ backgroundColor: '#f8f9fa', minHeight: '300px' }}>
                    {/* Placeholder for Delayed Shipments */}
                    Delayed Shipments
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;

