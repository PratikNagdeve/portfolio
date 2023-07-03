import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';
  
  downloadCV()
  {
  const documentUrl = 'document_url';
  const fileName = this.getFileNameFromUrl(documentUrl);

  const link = document.createElement('a');
  link.href = documentUrl;
  link.download = fileName;
  link.target = '_blank';
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  }

  getFileNameFromUrl(url: string): string {
    const index = url.lastIndexOf('/');
    return url.substring(index + 1);
  }

}
