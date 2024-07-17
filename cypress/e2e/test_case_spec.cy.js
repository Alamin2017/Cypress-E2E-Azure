import HomeLocator from "../pages/HomePage";
const home_obj=new HomeLocator();
describe('Test Case 1: Register User', () => {
    
    before('Navigate to url',() => {
        cy.visit("https://automationexercise.com/");
    });
    it('Verify that home page is visible successfully', () => {
        home_obj.home_page_logo().should('exist');
    });
    it('Click on Signup/Login button', () => {
        home_obj.signup_login_button().click();
    });
    it('Verify New User Signup! is visible', () => {
        home_obj.new_user_signup_text().should('have.text',"New User Signup!");
    });

});