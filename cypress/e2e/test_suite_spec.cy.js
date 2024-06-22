import HomeLocator from "../pages/HomePage";
const home_obj=new HomeLocator();
describe('Below is the list of test Cases for you to practice the Automation', () => {
    beforeEach(() => {
        cy.visit("https://automationexercise.com/");
    });
    it('Test Case 1: Register User', () => {
        home_obj.home_page_logo().should('exist');
        home_obj.signup_login_button().click();
        home_obj.new_user_signup_text().should('have.text',"New User Signup!");
    });
    it('Test Case 2: Register User', () => {
        home_obj.home_page_logo().should('exist');
        home_obj.signup_login_button().click();
        home_obj.new_user_signup_text().should('have.text',"New User Signup!");
    });
});