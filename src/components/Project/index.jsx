import { Container } from "./styles"
import { ButtonSmall } from "../ButtonSmall"


export function Project({ title, description, linkDemo, linkGit }) {

    return(
        <Container>
            <div className="card">
                <div className="card-img"></div>
                <ul className="social-media">
                    <a href={linkDemo} target="_black">
                        <li>
                            <ButtonSmall />
                        </li>
                    </a>
                    <a href={linkGit} target="_blank">
                        <li>
                            <ButtonSmall />
                        </li>
                    </a>
                </ul>
            </div>
            <h1>{ title } </h1>
            <p>{ description }</p>
        </Container>
    )
}