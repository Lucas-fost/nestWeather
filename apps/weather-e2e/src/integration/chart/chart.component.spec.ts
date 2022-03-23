describe('weather', () => {
  beforeEach(() => cy.visit('/iframe.html?id=chartcomponent--primary&args=info;'));
  it('should render the component', () => {
    cy.get('weather-chart').should('exist');
  });
});