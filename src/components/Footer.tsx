const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* reCAPTCHA Notice */}
        <div className="text-center">
          <div className="mb-4">
            <p className="text-sm text-gray-600">reCAPTCHA</p>
            <p className="text-sm text-gray-500 mb-2">Recaptcha requires verification.</p>
          </div>
          
          <div className="flex justify-center items-center space-x-4 text-xs text-gray-500">
            <a 
              href="https://www.google.com/intl/en/policies/privacy/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition-colors duration-300"
            >
              Privacy
            </a>
            <span>-</span>
            <a 
              href="https://www.google.com/intl/en/policies/terms/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition-colors duration-300"
            >
              Terms
            </a>
          </div>
          
          <div className="mt-4">
            <p className="text-xs text-gray-500">
              protected by <strong>reCAPTCHA</strong>
            </p>
            <div className="flex justify-center items-center space-x-4 text-xs text-gray-500 mt-2">
              <a 
                href="https://www.google.com/intl/en/policies/privacy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-700 transition-colors duration-300"
              >
                Privacy
              </a>
              <span>-</span>
              <a 
                href="https://www.google.com/intl/en/policies/terms/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-700 transition-colors duration-300"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;