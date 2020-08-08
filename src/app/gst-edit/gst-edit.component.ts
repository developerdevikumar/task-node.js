import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-gst-edit',
  templateUrl: './gst-edit.component.html',
  styleUrls: ['./gst-edit.component.css']
})
export class GstEditComponent implements OnInit {

  business: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: BusinessService,
    private fb: FormBuilder) {
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


  ngOnInit() {
    this.route.params.subscribe(params => {
        this.bs.editBusiness(params['id']).subscribe(res => {
          this.business = res;
      });
    });
  }
  updateBusiness(product_name, product_category, product_Price,product_Size,product_stock,product_description,) {
    this.route.params.subscribe(params => {
       this.bs.updateBusiness(product_name, product_category, product_Price,product_Size,product_stock,product_description, params['id']);
       this.router.navigate(['business']);
    });
    } 
  }