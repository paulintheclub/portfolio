import { Component, OnInit } from '@angular/core';
import { Photograph} from "../../models/photograph.model";
import { PhotographService} from "../../services/photograph.service";
import * as AOS from 'aos';
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  photographs!: Photograph[];
  isTwoColumnLayout: boolean = true;
  showFullDescription: { [key: number]: boolean } = {}; // Используйте объект для отслеживания состояния для каждой фотографии


  constructor(private photographService: PhotographService) {}

  ngOnInit() {
    const allPhotographs = this.photographService.getPhotographs();
    const start = allPhotographs.length - 6;
    this.photographs = allPhotographs.slice(start).reverse();

    AOS.init();
  }

  setTwoColumnLayout(): void {
    if (!this.isTwoColumnLayout) {
      this.isTwoColumnLayout = true;
    }
  }

  setThreeColumnLayout(): void {
    if (this.isTwoColumnLayout) {
      this.isTwoColumnLayout = false;
    }
  }
async savePhoto(url: string, name: string, photo: Photograph): Promise<void> {
  try {
    // Загружаем изображение как Blob
    const response = await fetch(url);
    const blob = await response.blob();

    // Создаем URL для Blob
    const blobUrl = URL.createObjectURL(blob);

    // Создаем временную ссылку для скачивания
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = name; // Указываем имя файла для скачивания
    document.body.appendChild(link); // Добавляем ссылку в документ
    link.click(); // Имитируем клик по ссылке, чтобы начать скачивание

    // Очистка после скачивания
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl); // Освобождаем URL Blob
    photo.isSaved = true;
  } catch (error) {
    console.error('Ошибка при скачивании изображения:', error);
  }
}

updatePhotosState(): void {
  this.photographs = [...this.photographs];
}


}
