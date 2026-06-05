import { Container } from "react-bootstrap";

function ColorScheme({colors}) {
  return(
    <Container className="pt-3">
      <ul className="list-unstyled d-flex gap-3 gap-md-4 justify-content-center">
        {colors.map((color) => <li key={color} className="rounded-circle d-flex" style={{width: '50px', height: '50px', backgroundColor: color}}></li>)}
      </ul>
    </Container>
  );
}

export default ColorScheme;