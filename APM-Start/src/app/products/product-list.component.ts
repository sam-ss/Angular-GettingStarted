import { Component } from '@angular/core';
import { IProduct } from './product';

@Component({
selector: 'pm-products',
templateUrl: './product-list.component.html',
styleUrls: ['./prodict-list.component.css']
})

export class ProductListComponent {
 pageTitle: string = 'Product List';
 imageWidth: number = 50;
 imageMargin: number = 2;
 showImage: boolean = false;

private _listFilter: string;
public get listFilter(): string {
  return this._listFilter;
}
public set listFilter(v: string) {
  this._listFilter = v;
  this.filteredProducts = this.listFilter ? this.peformFilter(this.listFilter) : this.products;
}

 filteredProducts: IProduct[];
 message: string;
 products: IProduct[] = [
    {
      'productId': 1,
      'productName': 'Leaf Rake',
      'productCode': 'GDN-0011',
      'releaseDate': 'March 19, 2016',
      'description': 'Leaf rake with 48-inch wooden handle.',
      'price': 19.95,
      'starRating': 3.2,
      'imageUrl': 'https://picsum.photos/id/117/1544/1024'
    },
    {
      'productId': 2,
      'productName': 'Garden Cart',
      'productCode': 'GDN-0023',
      'releaseDate': 'March 18, 2016',
      'description': '15 gallon capacity rolling garden cart',
      'price': 32.99,
      'starRating': 4.2,
      'imageUrl': 'https://picsum.photos/id/119/3264/2176'
    },
    {
      'productId': 5,
      'productName': 'Hammer',
      'productCode': 'TBX-0048',
      'releaseDate': 'May 21, 2016',
      'description': 'Curved claw steel hammer',
      'price': 8.9,
      'starRating': 4.8,
      'imageUrl': 'https://picsum.photos/id/121/1600/1067'
    },
    {
      'productId': 8,
      'productName': 'Saw',
      'productCode': 'TBX-0022',
      'releaseDate': 'May 15, 2016',
      'description': '15-inch steel blade hand saw',
      'price': 11.55,
      'starRating': 3.7,
      'imageUrl': 'https://picsum.photos/id/123/4928/3264'
    },
    {
      'productId': 10,
      'productName': 'Video Game Controller',
      'productCode': 'GMG-0042',
      'releaseDate': 'October 15, 2015',
      'description': 'Standard two-button video game controller',
      'price': 35.95,
      'starRating': 4.6,
      'imageUrl': 'https://picsum.photos/id/13/2500/1667'
    }
  ];

  toggleImage(): void {
      this.showImage = !this.showImage;
  }

  peformFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  
  constructor() {
      this.filteredProducts = this.products;
      this.listFilter = 'cart';
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  onRatingClick(message: string): void {
    this.message = message;
  }
}
