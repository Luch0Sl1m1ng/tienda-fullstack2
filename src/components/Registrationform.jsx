import { Form, Row, Col, Button, Card } from "react-bootstrap";
import { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({ name:"", last:"", email:"", phone:"", pass:"", pass2:"", terms:false });
  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };
  const valid =
    form.name && form.last && form.email && form.pass.length >= 6 && form.pass === form.pass2 && form.terms;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!valid) return;
    alert("¡Registro enviado!");
  };

  return (
    <Card id="registro" className="shadow-sm">
      <Card.Body>
        <h2 className="text-center mb-4">Registro de Usuario</h2>
        <Form onSubmit={onSubmit}>
          <Row className="g-3">
            <Col md={6}>
              <Form.Label>Nombre *</Form.Label>
              <Form.Control name="name" value={form.name} onChange={onChange} placeholder="Tu nombre" required />
            </Col>
            <Col md={6}>
              <Form.Label>Apellido *</Form.Label>
              <Form.Control name="last" value={form.last} onChange={onChange} placeholder="Tu apellido" required />
            </Col>

            <Col md={12}>
              <Form.Label>Email *</Form.Label>
              <Form.Control type="email" name="email" value={form.email} onChange={onChange} placeholder="correo@ejemplo.com" required />
            </Col>

            <Col md={12}>
              <Form.Label>Telefono</Form.Label>
              <Form.Control name="phone" value={form.phone} onChange={onChange} placeholder="+56 9 1234 5678" />
            </Col>

            <Col md={6}>
              <Form.Label>Contraseña *</Form.Label>
              <Form.Control type="password" name="pass" value={form.pass} onChange={onChange} placeholder="Mínimo 6 caracteres" required />
            </Col>
            <Col md={6}>
              <Form.Label>Confirmar Contraseña *</Form.Label>
              <Form.Control type="password" name="pass2" value={form.pass2} onChange={onChange} placeholder="Repite tu contraseña" required />
            </Col>

            <Col md={12}>
              <Form.Check
                type="checkbox"
                label="Acepto los términos y condiciones *"
                name="terms"
                checked={form.terms}
                onChange={onChange}
                required
              />
            </Col>

            <Col md={12}>
              <Button type="submit" disabled={!valid} className="w-100">Registrarse</Button>
              <div className="text-center text-muted mt-2">
                <small>Los campos marcados con * son obligatorios</small>
              </div>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}