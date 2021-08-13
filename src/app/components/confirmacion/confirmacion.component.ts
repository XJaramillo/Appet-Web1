import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef <ConfirmacionComponent>, @Inject(MAT_DIALOG_DATA) public message: string) { }

  ngOnInit(): void {
  }

  onclickNo(): void{
    this.dialogRef.close();
  }
  
  eliminar(){

  }

}
