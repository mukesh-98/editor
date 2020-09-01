import { Component, OnInit } from '@angular/core';
import * as Editor from '../ckeditor5/build/ckeditor.js';
import {CloudinaryImageUploadAdapter} from 'ckeditor-cloudinary-uploader-adapter';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
public Editor = Editor;
  public editorConfig = {
    image: {
      upload : {
        types : [ 'jpeg' , 'png' , 'gif' , 'bmp' , 'webp' , 'tiff']
      },
      toolbar: [
        'imageStyle:full',
        'imageStyle:side',
        '|',
        'imageTextAlternative',
      ]
    },
    toolbar: [
      'heading',
      '|', 'Bold', 'highlight', 'italic', 'underline', 'strikethrough', 'code', 'subscript', 'superscript',
      '|', 'outdent', 'indent',
      '|', 'fontFamily', 'fontColor', 'fontBackgroundColor', 'fontSize',
      '|', 'link', 'bulletedList', 'numberedList', 'blockQuote',
      '|' , 'MathType' , 'ChemType' ,
      '|', 'insertTable', 'mediaEmbed', 'imageUpload' , 'ckfinder',
      '|', 'redo' , 'undo' ,
      '|', 'imageStyle:full', 'imageStyle:side',
      '|', 'imageTextAlternative',
    ],
    /*ckfinder: {
      options: {
        resourceType: 'Images'
      },
      uploadUrl: 'file://home',
    },*/
    heading: {
      options: [
        { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
        { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
        { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
      ]
    },
    table: {
      contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
    },
    extraPlugins : [imagePluginFactory],
  };
  constructor() { }

  ngOnInit() {
  }
}
function imagePluginFactory(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = loader => {
    return new CloudinaryImageUploadAdapter(loader, "dertp5evi", "rricxzum", [
      350
    ]);
  };
}
