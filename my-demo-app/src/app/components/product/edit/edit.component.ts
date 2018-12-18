import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'edit-product',
    templateUrl: './edit.component.html'
})
export class EditProductComponent implements OnInit {

    productForm: FormGroup;
    constructor(
        private formBuilder: FormBuilder,
        private productService: ProductService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        var id = this.activatedRoute.snapshot.params.id;
        this.productService.find(id).subscribe(
            res => {
                this.productForm = this.formBuilder.group({
                    id: res.id,
                    name: res.name,
                    price: res.price,
                    quantity: res.quantity
                })
            },
            error => {
                console.log(error);
            }
        )
    }

    save(){
        this.productService.update(this.productForm.value).subscribe(
            res => {
                this.router.navigate(['']);
            },
            error =>{
                console.log(error);
            }
        );
    }

}