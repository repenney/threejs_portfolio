const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <a href="terms.html" target="_blank" rel="noreferrer">
            <p>Terms & Conditions</p>
          </a>
          <p>|</p>
          <a href="privacy.html" target="_blank" rel="noopener noreferrer">
            <p>Privacy Policy</p>
          </a>
        </div>
  
        <div className="flex gap-3">
          
            <a href="https://github.com/repenney" target="_blank" rel="noreferrer">
                <div className="social-icon">
                    <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
                </div>
            </a>

          <a href="https://www.linkedin.com/in/ruth-penney/" target="_blank" rel="noreferrer">
            <div className="social-icon">
              <img src="/assets/linkedin.png" alt="twitter" className="w-1/2 h-1/2" />
            </div>
          </a>

          
        </div>
  
        <p className="text-white-500">© 2025 Ruth Penney. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;