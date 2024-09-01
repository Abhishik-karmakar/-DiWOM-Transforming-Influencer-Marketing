import { Container } from "react-bootstrap"

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <Container>
                    <p>
                        © {new Date().getFullYear()} AIWON. All rights reserved.
                    </p>
                </Container>
            </footer>
        </>
    )
}

export default Footer
