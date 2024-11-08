Feature: Test

    Asking the student if he can link the definition and the term

    Scenario: 1 Random Flashcard is chosen
        Given Student is connected to his account
        When Student type his answer
        Then The application will say if it's true or false
