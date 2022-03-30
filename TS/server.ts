import http from 'http';
import fs from 'fs';

http
  .createServer((request, response) => {
    // получаем путь после слеша
    if (request.url) {
      let filePath = request.url.substr(1);
      if (filePath === '') filePath = 'index.html';

      fs.readFile(filePath, (error, data) => {
        if (error) {
          response.statusCode = 404;
          response.end('Resourse not found!');
        } else {
          if (filePath.endsWith('.js')) response.setHeader('Content-Type', 'text/javascript');
          response.end(data);
        }
      });
    }
  })
  .listen(3000, () => {
    console.log('Server started at 3000');
  });
