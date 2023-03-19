/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */
// import './index.css';
import './stylesheets/main.scss';

const fetch = async (url, options = {}) => window.versions.customFetch(url, options);
// fetch('https://www.comptapp.me/api/v1/test_get',    { method: 'GET' })    .then(response => console.log(response))
// fetch('https://www.comptapp.me/api/v1/test_patch',  { method: 'PATCH' })  .then(response => console.log(response))
// fetch('https://www.comptapp.me/api/v1/test_post',   { method: 'POST' })   .then(response => console.log(response))
// fetch('https://www.comptapp.me/api/v1/test_delete', { method: 'DELETE' }) .then(response => console.log(response))

class Api {
  constructor(fetchFunc) {
    this.url = "https://kitt.lewagon.com/api/v1"
    this.fetch = fetchFunc
    this.baseHeaders = {
      "User-Agent": navigator.userAgent,
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Cookie": "_kitt2017_=tR36y%2BQprlTieLVpexMjBB60r2veHPhHc26nQMxSK%2B7XJDGg5BCUGsdOMH72x8KV%2FW%2F4nePEX93O3S%2Bha76XWTMOvg2x8bNOhIAxUZjoCAnQ8Z2jBxLw3OQ7RGWSdg9jLwAY5q7XYU%2Fhcg84odc9K%2FLWbAbZeBP41z%2FWMhjOPPSAbc4yfidCCUF0Nl1rz7C1KC5IS3jocTAYBkR9JllzcJH2HvDHY%2FEJvHNvrb05bOF7MBozKMSLgqunuo3nDYB%2BErgUrJLnhT1kv7%2BfrU5kuk7qBkF7CX2JJftUF9MNj6OG5GnW0PCkNjypFYze%2FPdQrgFQS8xOjH33ASUzg7cQ4BW1k4nneQNAaPfeoLYcBzXrSBWHdZV6a4ssx4hglww%2BN4mL2SR9FYcpns1m77S8cRKevn9k9O8b6KaZgchnxG4yrrs9Nvj65gXsFhNbkhRBsZ4J3jPDgDO27oPJnouhLDtnsEOOn7E6CGe2JFnKYuSHjtd%2BRxXTt1G3yHY%3D--Besg%2BcfWyFfaDn9D--2Bn8j%2FjAdG8OIq5VD4yMxQ%3D%3D"
    }
  }

  get(path) {
    const url = `${this.url}${path}`
    const options = {
      credentials: "include",
      headers: this.baseHeaders
    }
    return this.fetch(url, options)
  }

  post(path, data) {
    const url = `${this.url}${path}`
    const options = {
      method: "POST",
      credentials: "include",
      headers: this.baseHeaders,
      body: JSON.stringify(data)
    }
    return this.fetch(url, options)
  }
}

const api = new Api(fetch);

const button = document.querySelector('.button');
button.addEventListener('click', async () => {
  const data = await api.get('/camps/1170/tickets')
  console.log(data)
});
