
import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-gst-add',
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.css']
})
export class GstAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: BusinessService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
     
      product_name: ['', Validators.required ],
      product_category: ['', Validators.required ],
      product_Price: ['', Validators.required ],
      product_Size: ['', Validators.required ],
      product_stock: ['', Validators.required ],
      product_description: ['', Validators.required ],     

    });
  }

  addBusiness(product_name, product_category, product_Price,product_Size,product_stock,product_description ) {
    this.bs.addBusiness(product_name, product_category, product_Price,product_Size,product_stock,product_description);
  }

  ngOnInit() {
  }

}