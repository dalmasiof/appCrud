import { pipe } from 'rxjs';
import { ImagePipe } from './image.pipe';

describe('ImagePipe', () => {
  const pipeImage = new ImagePipe();
  const imageName= 'celular.png';
  const path = 'default';

  describe('Isolate test',()=>{
  
    it('create an instance', () => {
      expect(pipeImage).toBeTruthy();
    });
  
    it('should return location of image default',()=>{
      expect(pipeImage.transform(imageName,path,true)).toEqual(`assets/${imageName}`)
    })

    it('should return location of image with other path',()=>{
      let newPath = 'folder';
      expect(pipeImage.transform(imageName,newPath,true)).toEqual(`${newPath}/${imageName}`)
    })

    it('should return location of image without imageName',()=>{
      let newImageName = '';
      expect(pipeImage.transform(newImageName,path,true)).toEqual(`assets/semCapa.jpg`)
    })

  })


  
});
