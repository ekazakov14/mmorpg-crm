import { Card, Col, Row } from 'antd';
import Title from 'antd/lib/typography/Title';
import { Login } from '../components/forms/Login';

export const LoginPage = () => (
  <Row justify="center"
    align="middle"
    style={{ minHeight: '100vh' }}>
    <Col style={{width: '100%', maxWidth: '400px', margin: '0 15px'}}>
      <Card style={{boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)'}}>
        <Title>Sign in</Title>
        <Login />
      </Card>
    </Col>
  </Row>
);