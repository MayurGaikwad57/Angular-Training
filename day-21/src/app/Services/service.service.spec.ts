import { TestBed } from '@angular/core/testing';
import { ServiceService } from './service.service';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from '../table/table.component';

describe('ServiceService', () => {
  let service: ServiceService;
  let component: TableComponent;

  beforeEach (async() => {
    await TestBed.configureTestingModule({
      providers:[ServiceService],
      imports:[HttpClientModule],
      declarations:[TableComponent]
    }).compileComponents();
    service = TestBed.inject(ServiceService);
    component = TestBed.createComponent(TableComponent).componentInstance
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call getCustomer on MyService when initialized', () => {
    spyOn(service, 'getCustomer');

    component.ngOnInit(); 

    expect(service.getCustomer).toHaveBeenCalled();
  });
});
