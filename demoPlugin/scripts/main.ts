/// <reference path="../typings/jquery.d.ts" />
interface readableFile {
    read(): void;
    open(): void;
    write?(): void;
}
class customContextMenu{
  elements:{};
  constructor(elements:{}){
    this.elements=elements;
  }
  public addContextMenu(source){
      console.log($(source).html());
  }
  public uploadFile=()=>{
    $.each(this.elements,function(index,elem){
      var fileName=elem.name;
      var fileExtension =fileName.split(".")[fileName.split(".").length-1].toLowerCase();
      var tempStr="<p class=fileDetails>"+fileName+"</p>";
      $('#linkContainer').append(tempStr);
      var $tempStr=$(tempStr);
      $(document).on('contextmenu', $tempStr, function(){
         var b=new customContextMenu(this.elements).addContextMenu(event.target);
      });
    });
  }
}

function fileUpload(){
  var filesList=document.getElementById('inputUpload').files;
  var a= new customContextMenu(filesList);
  a.uploadFile();
}
