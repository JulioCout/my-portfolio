import { Container } from "./styles"


export function ProjectSection() {

    return(
        <Container>
            <div className="component">
                <h1>Meus Trabalhos</h1>

                <div className="buttons-container">
                    <button>
                        <span class="text">Full Stack</span>
                    </button>
                    <button>
                        <span class="text">FrontEnd</span>
                    </button>                   
                </div>

                <div className="cards-container">

                </div>
            </div>
        </Container>
    )
}