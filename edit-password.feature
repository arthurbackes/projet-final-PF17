Feature: Editing the password

    If the student forgot or want to change his password, he can use this feature to change it 

    Scenario: E-mail
        Given Student is on the website
        And Student is on the inscription page but cannot login
        When Student clicks on the "Reinitialize password"
        Then A new page with a box for the email wind up
        When Student fill the box with his email 
        Then An email with a new password will be sent to the Student on his email 

    Scenario: On the website