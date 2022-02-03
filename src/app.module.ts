import { Module } from '@nestjs/common';
import { DepartmentService } from 'app/facade/department.service';
import { EmployeeService } from 'app/facade/employee.service';
import { DepartmentController } from 'app/routes/department.controller';
import { EmployeeController } from 'app/routes/employee.controller';
import { DepartmentEntity } from 'submodules/ex3-ms-entities/department.entity';
import { EmployeeEntity } from 'submodules/ex3-ms-entities/employee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([DepartmentEntity, EmployeeEntity]),
  ],
  controllers: [
    EmployeeController,
    DepartmentController
  ],
  providers: [
    EmployeeService,
    DepartmentService,
  ],
})
    

export class AppModule { }


