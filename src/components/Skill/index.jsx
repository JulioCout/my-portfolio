import { Container } from "./styles";


export function Skill({ icon, title, description }) {

    return(
        <Container>
            <div className="card">
                <div className="header">
                    <div className="img-box">
                        <img src={icon} alt="" />
                    </div>
                    <h1 className="title">{ title }</h1>
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