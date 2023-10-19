import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component'

describe('ConfirmationDialogComponent', () => {
  const onAccept = jest.fn();
  const onClose = jest.fn();
  const title = 'Dialog Title';
  const children = 'Children content'
  const labels = { closeButton: 'Close', acceptButton: 'Accept' };
  
  it('renders correctly when isOpen is true', () => {
    //Arrange

    //Act
    const { getByText } = render(
      <ConfirmationDialogComponent
        isOpen={true}
        onAccept={onAccept}
        onClose={onClose}
        title={title}
        labels={labels}
      >
        {children}
      </ConfirmationDialogComponent>
    );

    //Assert
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(children)).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    //Arrange

    //Act
    const { queryByText } = render(
      <ConfirmationDialogComponent
        isOpen={false}
        onAccept={onAccept}
        onClose={onClose}
        title={title}
        labels={labels}
      >
        {children}
      </ConfirmationDialogComponent>
    );

    //Assert
    expect(queryByText(title)).toBeNull();
    expect(queryByText(children)).toBeNull();
  });

  it('calls onAccept when the Accept button is clicked', () => {
    //Arrange

    //Act
    const { getByRole } = render(
      <ConfirmationDialogComponent
        isOpen={true}
        onAccept={onAccept}
        onClose={onClose}
        title={title}
        labels={labels}
      >
        {children}
      </ConfirmationDialogComponent>
    );
    const acceptButton = getByRole('button', { name: 'Accept' });
    fireEvent.click(acceptButton);

    //Assert
    expect(onAccept).toHaveBeenCalled();
  });

  it('calls onClose when the Close button is clicked', () => {
    //Arrange
    
    //Act
    const { getByRole } = render(
      <ConfirmationDialogComponent
        isOpen={true}
        onAccept={onAccept}
        onClose={onClose}
        title={title}
        labels={labels}
      >
        {children}
      </ConfirmationDialogComponent>
    );
    const closeButton = getByRole('button', { name: 'Close' });
    fireEvent.click(closeButton);

    //Assert
    expect(onClose).toHaveBeenCalled();
  });
});
