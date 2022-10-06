import { Container } from "./styles";


export function Skill({ icon, description }) {

    return(
        <Container>
            <div className="card">

                <div className="header">
                    <div className="img-box">
                        <img src={icon} alt="" />
                    </div>
                </div>

                <div className="content">
                    <p>
                        { description }
                    </p>
                </div>
                
            </div>
        </Container>
    )
}