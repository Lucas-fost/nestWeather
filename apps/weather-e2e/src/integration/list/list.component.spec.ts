describe('weather', () => {
  beforeEach(() => cy.visit('/iframe.html?id=listcomponent--primary'));
  it('should render the component', () => {
    cy.get('weather-list').should('exist');
  });
});