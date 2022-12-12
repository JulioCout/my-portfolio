import { Container } from "./styles";


export function Skill({ icon, title, description }) {

    return(
        <Container>
            
            <div className="card">

                <div className="card-head">
                    <img src={icon} alt="" />
                    <h2>{ title}</h2>
                </div>

                <p>{ description }</p>

            </div>

        </Container>
    )
}