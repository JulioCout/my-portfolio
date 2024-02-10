import { Container } from "./styles";


export function MaintenanceSection() {

  return (
    <Container>
      <div id="Maintenance" className="MaintenanceSection-body">

        <div className="port">
          <h1>Em manutenção!</h1>
          <p>Alterando o Conteúdo...</p>
        </div>

        <div className="eng">
          <p>Website under maintenance...</p>
        </div>

        <div className="buttons-wrapper">
          <a href="https://www.linkedin.com/in/juliocscoutinho/" target="_blank">
            LinkedIn
          </a>
          <a href="">-</a>
          <a href="https://github.com/JulioCout" target="_blank">
            Github
          </a>
        </div>
        
      </div>
    </Container>
  );
}
