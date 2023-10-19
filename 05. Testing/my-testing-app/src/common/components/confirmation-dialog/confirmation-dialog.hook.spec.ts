import { renderHook, act } from '@testing-library/react';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('useConfirmationDialog', () => {
  it('should load initial state correctly', () => {
    //Arrange

    //Act
    const { result } = renderHook(() => useConfirmationDialog());

    //Assert
    expect(result.current.isOpen).toBeFalsy();
    expect(result.current.itemToDelete).toEqual({id: '', name: '',});
  });

  it('should delete item when onAccept is called', () => {
    //Arrange
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog({ id: '1', name: 'Item' });

    });
    //Act
    act(() => {
      result.current.onAccept();
    });

    //Assert
    expect(result.current.itemToDelete).toEqual({id: '', name: '',});
  });

  it('should close the dialog when onClose is called', () => {
    //Arrange
    const { result } = renderHook(() => useConfirmationDialog());

    //Act
    act(() => {
      result.current.onClose();
    });

    //Assert
    expect(result.current.isOpen).toBeFalsy();
  });

  it('should open the dialog and set the item to delete when onOnpenDialog is called', () => {
    //Arrange
    const { result } = renderHook(() => useConfirmationDialog());

    //Act
    act(() => {
      result.current.onOpenDialog({ id: '1', name: 'Item' });
    });

    //Arrange
    expect(result.current.isOpen).toBeTruthy();
    expect(result.current.itemToDelete).toEqual({ id: '1', name: 'Item' });
  });
});
