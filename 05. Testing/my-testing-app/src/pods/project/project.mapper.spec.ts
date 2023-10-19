import * as viewModel from './project.vm';
import {
  mapEmployeeSummaryFromApiToVm,
  mapEmployeeSummaryListFromApiToVm,
  mapProjectFromApiToVm,
} from './project.mapper';

describe('Data mapping', () => {
  const apiDataList = [
    {
      id: '1',
      employeeName: 'Daniel Perez',
      isAssigned: true,
    },
    {
      id: '2',
      employeeName: 'Jose Sanchez',
      isAssigned: false,
    },
    {
      id: '3',
      employeeName: 'Javier Benitez',
      isAssigned: false,
    },
  ];

  it('should map employee data correctly', () => {
    //Arrange
    const apiData = apiDataList[2];
    const expectedVmData = {
      id: '3',
      employeeName: 'Javier Benitez',
      isAssigned: false,
    };

    //Act
    const result = mapEmployeeSummaryFromApiToVm(apiData);

    //Assert
    expect(result).toEqual(expectedVmData);
  });

  it('should map employees array correctly', () => {
    //Arrange
    const expectedVmDataList = [
      {
        id: '1',
        employeeName: 'Daniel Perez',
        isAssigned: true,
      },
      {
        id: '2',
        employeeName: 'Jose Sanchez',
        isAssigned: false,
      },
      {
        id: '3',
        employeeName: 'Javier Benitez',
        isAssigned: false,
      },
    ];

    //Act
    const result = mapEmployeeSummaryListFromApiToVm(apiDataList);

    //Assert
    expect(result).toEqual(expectedVmDataList);
  });

  it('should map project correctly', () => {
    //Arrange
    const apiProject = {
      id: '1',
      name: 'Nombre',
      isActive: true,
      comments: 'Comentario',
      externalId: '1234',
      employees: apiDataList,
    };
    const expectedVmProject = {
      id: '1',
      name: 'Nombre',
      isActive: true,
      comments: 'Comentario',
      externalId: '1234',
      employees: [
        {
          id: '1',
          employeeName: 'Daniel Perez',
          isAssigned: true,
        },
        {
          id: '2',
          employeeName: 'Jose Sanchez',
          isAssigned: false,
        },
        {
          id: '3',
          employeeName: 'Javier Benitez',
          isAssigned: false,
        },
      ],
    };

    //Act
    const result = mapProjectFromApiToVm(apiProject);

    //Assert
    expect(result).toEqual(expectedVmProject);
  });

  it('should return empty project when feeding null', () => {
    //Arrange
    const apiProject = null;
    const expectedVmProject = viewModel.createEmptyProject();

    //Act
    const result = mapProjectFromApiToVm(apiProject);

    //Assert
    expect(result).toEqual(expectedVmProject);
  });

  it('should return empty project when feeding undefined', () => {
    //Arrange
    const apiProject = undefined;
    const expectedVmProject = viewModel.createEmptyProject();

    //Act
    const result = mapProjectFromApiToVm(apiProject);

    //Assert
    expect(result).toEqual(expectedVmProject);
  });

  it('should return empty project when feeding empty project', () => {
    //Arrange
    const apiProject = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    };
    const expectedVmProject = viewModel.createEmptyProject();

    //Act
    const result = mapProjectFromApiToVm(apiProject);

    //Assert
    expect(result).toEqual(expectedVmProject);
  });
});
