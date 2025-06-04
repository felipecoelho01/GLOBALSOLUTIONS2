import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="bg-footer text-white py-4 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h5 className="fw-bold">© 2025 - DisasterGuard</h5>
              <h5 className="mb-4">Desenvolvido por:</h5>
              <ul className="list-unstyled d-flex justify-content-center">
                <li className="mx-3">
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/fred-carvalho1721/"
                    className="link-underline-light text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin mx-1"></i> Fred Carvalho
                  </a>
                </li>
                <li className="mx-3">
                  <a
                    href="https://www.linkedin.com/in/felipevazcoelho/"
                    className="link-underline-light text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin mx-1"></i> Felipe Vaz
                  </a>
                </li>
                <li className="mx-3">
                  <a
                    href="https://www.linkedin.com/in/jo%C3%A3o-pedro-albino-58206b316/"
                    className="link-underline-light text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin mx-1"></i> João Pedro
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
