/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';


import { CoffeeListComponent } from './coffee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CoffeeService } from '../coffee.service';
import { Coffee } from '../coffee';


describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;
  let debug: DebugElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CoffeeListComponent ],
      providers: [ CoffeeService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;

    const coffees: Coffee[] = [];
    for(let i = 0; i < 3; i++) {
      coffees.push({
        id: faker.datatype.number(),
        nombre: faker.lorem.sentence(),
        tipo: faker.lorem.sentence(),
        region: faker.lorem.sentence(),
        sabor: faker.lorem.sentence(),
        altura: faker.datatype.number(),
        imagen: faker.image.imageUrl()
      });
    }

    component.coffees = coffees;

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 1 <table.table> elements', () => {
    expect(debug.queryAll(By.css('table.table'))).toHaveSize(1)
  });

  it('should have 1 <tr.table-dark> elements', () => {
    expect(debug.queryAll(By.css('tr.table-dark'))).toHaveSize(1)
  });

  it('should have 4 <tr> elements', () => {
    expect(debug.queryAll(By.css('tr'))).toHaveSize(4)
  });

  it('should have 3 <tr.listCoffees> elements', () => {
    expect(debug.queryAll(By.css('tr.listCoffees'))).toHaveSize(3)
  });

  it('should have 2 <hr.bg-dark.border-2.border-top.border-dark> elements', () => {
    expect(debug.queryAll(By.css('hr.bg-dark.border-2.border-top.border-dark'))).toHaveSize(2)
  });

  it('should have 1 <img> elements', () => {
    expect(debug.queryAll(By.css('img'))).toHaveSize(1)
  });

  it('should have th tag with the coffee.id', () => {
    debug.queryAll(By.css('td.id')).forEach((td, i)=>{
      expect(td.nativeElement.textContent).toContain(component.coffees[i].id)
    });
  });

  it('should have td tag with the coffee.nombre', () => {
    debug.queryAll(By.css('td.nombre')).forEach((td, i)=>{
      expect(td.nativeElement.textContent).toContain(component.coffees[i].nombre)
    });
  });

  it('should have td tag with the coffee.tipo', () => {
    debug.queryAll(By.css('td.tipo')).forEach((td, i)=>{
      expect(td.nativeElement.textContent).toContain(component.coffees[i].tipo)
    });
  });

  it('should have td tag with the coffee.region', () => {
    debug.queryAll(By.css('td.region')).forEach((td, i)=>{
      expect(td.nativeElement.textContent).toContain(component.coffees[i].region)
    });
  });

  it('should have 3 <td.nombre> elements', () => {
    expect(debug.queryAll(By.css('td.nombre'))).toHaveSize(3)
  });

  it('should have 2 <td.nombre> elements and the deleted coffee should not exist', () => {
    const coffee = component.coffees.pop()!;
    fixture.detectChanges();
    expect(debug.queryAll(By.css('td.nombre'))).toHaveSize(2)

    debug.queryAll(By.css('td.nombre')).forEach((selector, i)=>{
      expect(selector.nativeElement.textContent).not.toContain(coffee.nombre);
    });
  });

});
