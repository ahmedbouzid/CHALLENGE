import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  linkForm  !:FormGroup ;
  savedLinks: { link: string, social__media: string }[] = [];
constructor(
  private fb: FormBuilder ,
  ) {}

  ngOnInit(): void {
    this.linkForm = this.fb.group({
      formControllToBeRepeated: this.fb.array([]) // Initialize with an empty array
    });
    this.savedLinks = [];
  }
  createLinkFormGroup() {
    return this.fb.group({
      social__media: [null, Validators.required],
      link: [null, Validators.required]
    });
  }
 get getFormArray() : FormArray {
    return this.linkForm.get('formControllToBeRepeated') as FormArray
  }
  addGroupToFormArray(){

    this.getFormArray.push(this.createLinkFormGroup())

  }
  deleteFormArray(index : number) {
    this.getFormArray.removeAt(index)
  }

  saveLink(){


    for (const control of this.getFormArray.controls) {
      const link = control.get('link')?.value ;
      const social__media = control.get('social__media')?.value;
      this.savedLinks.push({link , social__media}) ;

    }
    console.log('====================================');
    console.log(this.savedLinks);
    console.log('====================================');
  }


  getButtonBackgroundColor(socialLink : string){

    switch (socialLink) {
      case 'Github':
        return '#191919' ;
        break;
        case 'FaceBook':
          return '#2D69FF' ;
          break;
        case 'Instagram':
            return '#EF383A' ;
            break;
        case 'LinkedIn':
              return '#2D69FF' ;
              break;
        case 'Youtube':
              return '#EF383A' ;
                break;
      default:
        return 'gray'
        break;
    }
  }
  getIconForLink(socialLink : string){

    switch (socialLink) {
      case 'Github':
        return 'bi-github' ;
        break;
        case 'FaceBook':
          return 'bi-facebook' ;
          break;
        case 'Instagram':
            return 'bi-instagram' ;
            break;
        case 'LinkedIn':
              return 'bi-linkedin' ;
              break;
        case 'Youtube':
                return 'bi-youtube' ;
                break;
      default:
        return 'bi-123'
        break;
    }
  }

}
