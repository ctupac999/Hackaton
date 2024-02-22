// import { Test, TestingModule } from '@nestjs/testing';
// import { PropertyController } from './property.controller';
// import { PropertyService } from './property.service';
// import { Property } from './entities/property.entity'
// import { UserModule } from './user.module';
// import { Driver } from '../driver/schemas/driver.schema';
// import { DriverService } from '../driver/driver.service';
// import { DriverController } from '../driver/driver.controller';


// describe('propertyController', () => {
//   let controllerUser: UserController;
//   let serviceUser: UserService;
//   let controllerDriver: DriverController;
//   let serviceDriver: DriverService; 
//   const mockDriverService={}
//   const mockUserService ={
//     findAll: jest.fn().mockResolvedValue([])
//   }
//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
      
//       controllers: 
//       [UserController, DriverController],
//       providers: [UserService, DriverService],
//     })
//     .overrideProvider(DriverService)
//     .useValue(mockDriverService)
//     .overrideProvider(UserService)
//     .useValue(mockUserService)
//     .compile();
//     controllerDriver = module.get<DriverController>(DriverController);
//     serviceDriver = module.get<DriverService>(DriverService)
//     controllerUser = module.get<UserController>(UserController);
//     serviceUser = module.get<UserService>(UserService);
//   });

//   it('should be defined', () => {
//     expect(controllerDriver && controllerUser).
//     toBeDefined();
//   });
//   describe('GET findAll', () => {
//     it('should call userService', async() =>{
//       const findAllSpy=jest.spyOn(serviceUser, 'findAll');
//       await controllerUser.findAllUsers();
//       expect(findAllSpy).toHaveBeenCalled()
//   })
//   it('should return All Users', async() =>{
//     const result= await controllerUser.findAllUsers();
//     expect(result).toMatchObject([])
//   })

// })
// });
