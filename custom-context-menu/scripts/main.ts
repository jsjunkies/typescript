////<reference path="../typings/jquery.d.ts" />
var menuData=[{
  "type":"docx",
  "menuItems":["copy", "open","delete", "edit"]
},
{
  "type":"pdf",
  "menuItems":["copy", "open","delete"]
},
{
  "type":"zip",
  "menuItems":["copy", "open","delete","extract"]
}
]
class demoClass{
  elements:{}
  constructor(elements:{}){
    this.elements=elements;
  }
  removeContextMenu(){
    $('.fileDetails').off('contextmenu');
  }
  addContextMenu(callback){
    $('.fileDetails').off('contextmenu');
    $('.fileDetails').on('contextmenu', function(event){
      event.preventDefault();
      var fileName = $(event.target).html();
      var fileType = $(event.target).attr('data-type');
      var menuItems=$.map(menuData, function(k,v){
        return k.type==fileType? k.menuItems :[]}
      );
      console.log(menuItems);
      console.log("File Name = "+fileName+ " :: File Type = "+fileType );
    })
    //this.removeContextMenu();

  }
  uploadFile(callback){
    $.each(this.elements, function(index,element){
      var fileName=element.name;
      var fileType=fileName.split('.')[fileName.split('.').length-1].toLowerCase();
      var tempVar="<span class=fileDetails data-type="+fileType+">"+element.name+"</span>";
      $('#fileContainer').append(tempVar);
    })
    callback();
  }
}

function upload(){
  var fileList=(<HTMLInputElement>document.getElementById('uploader')).files;
  var a=new demoClass(fileList);
  a.uploadFile(a.addContextMenu);
}
