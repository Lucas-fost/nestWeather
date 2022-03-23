describe('weather', () => {
  beforeEach(() => cy.visit('/iframe.html?id=tilecomponent--primary&args=currentCity;'));
  it('should render the component', () => {
    cy.get('weather-tile').should('exist');
  });
});