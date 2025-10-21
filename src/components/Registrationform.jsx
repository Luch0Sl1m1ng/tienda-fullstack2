import { Form, Button } from "react-bootstrap";

export default function RegistrationForm({ title = "Registro de Viajero" }) {
  return (
    <div className="p-3 border rounded-3 bg-white">
      <h2 className="text-center mb-4">{title}</h2>
      <Form>
        <div className="row g-3">
          <div className="col-md-6">
            <Form.Label>Nombre *</Form.Label>
            <Form.Control placeholder="Tu nombre" />
          </div>
          <div className="col-md-6">
            <Form.Label>Apellido *</Form.Label>
            <Form.Control placeholder="Tu apellido" />
          </div>
          <div className="col-12">
            <Form.Label>Email *</Form.Label>
            <Form.Control type="email" placeholder="correo@ejemplo.com" />
          </div>
          <div className="col-12">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control placeholder="+56 9 1234 5678" />
          </div>
          <div className="col-md-6">
            <Form.Label>Contraseña *</Form.Label>
            <Form.Control type="password" placeholder="Mínimo 6 caracteres" />
          </div>
          <div className="col-md-6">
            <Form.Label>Confirmar Contraseña *</Form.Label>
            <Form.Control type="password" placeholder="Repite tu contraseña" />
          </div>
          <div className="col-12">
            <Form.Check label="Acepto los términos y condiciones *" />
          </div>
          <div className="col-12">
            <Button type="submit" className="w-100">Registrarse</Button>
          </div>
        </div>
        <p className="text-center text-muted mt-2">
          Los campos marcados con * son obligatorios
        </p>
      </Form>
    </div>
  );
}




