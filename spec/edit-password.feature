Feature: Editing the password

    If the student forgot or want to change his password, he can use this 
    feature to change it 

    Scenario: E-mail
        Given Student is on the website
        And Student is on the inscription page but cannot login
        When Student clicks on the "Reinitialize password" button
        Then A new page with a box for the email wind up
        When Student fill the box with his email 
        Then An email with a new password will be sent to the Student 
        on his email 

    Scenario: On the website
        Given Student is connected to his acccount
        And Student is on the profile page 
        When Student clicks on the "Reinitialize password" button
        And Student fill the box where he type his last password 
        And Student fill the box where he type his new password
        Then The password is changed