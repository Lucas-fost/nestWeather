describe('weather', () => {
  beforeEach(() => cy.visit('/iframe.html?id=currenttilecomponent--primary&args=loc;'));
  it('should render the component', () => {
    cy.get('weather-current-tile').should('exist');
  });
});