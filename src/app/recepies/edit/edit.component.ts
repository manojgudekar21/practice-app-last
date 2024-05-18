import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecepieService } from 'src/app/shared/recepie.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editMode: boolean = false;
  id: number;
  recepieform: FormGroup;
  constructor(private route: ActivatedRoute,private router:Router, private recepieService: RecepieService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      // console.log(this.editMode)
      this.initform()
    })
  }
  onSubmit() {
    if (this.editMode) {
      this.recepieService.updateRecepie(this.id, this.recepieform.value)
    } else {
      this.recepieService.addnewRecepie(this.recepieform.value)
    }
    this.router.navigate(['../'],{relativeTo:this.route})
  }
  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route})
  }
  onDeleteIngrident(index:number){
    (<FormArray>this.recepieform.get('ingridents')).removeAt(index)
  }
  onAddIngrident() {
    (<FormArray>this.recepieform.get('ingridents')).push(new FormGroup({
      'ingrident': new FormControl(null),
      'amount': new FormControl(null)
    }))
  }

  initform() {
    let recepieName = ''
    let recepieImagePath = ''
    let recepieDescription = ''
    let recepieIngridents = new FormArray([])

    if (this.editMode) {
      const recepie = this.recepieService.getRecepiebyid(this.id)
      recepieName = recepie.name
      recepieImagePath = recepie.imagePath
      recepieDescription = recepie.discription
      if (recepie['ingridents']) {
        for (let ingrident of recepie.ingridents) {
          recepieIngridents.push(new FormGroup({
            'ingrident': new FormControl(ingrident.ingrident, Validators.required),
            'amount': new FormControl(ingrident.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }))
        }
      }
    }
    this.recepieform = new FormGroup({
      'name': new FormControl(recepieName, Validators.required),
      'imagePath': new FormControl(recepieImagePath, Validators.required),
      'discription': new FormControl(recepieDescription, Validators.required),
      'ingridents': recepieIngridents
    })
  }

}
