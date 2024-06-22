class HomeLocator{
    signup_login_button(){
        return cy.xpath("//a[normalize-space()='Signup / Login']");
    }
    home_page_logo(){
        return cy.xpath("//img[@alt='Website for automation practice']");
    }
    new_user_signup_text(){
        return cy.xpath("//h2[normalize-space()='New User Signup!']");
    }
}
export default HomeLocator
