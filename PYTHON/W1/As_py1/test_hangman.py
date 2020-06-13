from hangman import Hangman

def test_status():
    game1 = Hangman("hello")
    assert game1.status() == "?????"
    # ----- YOUR CODE HERE ------
    # add a test for "goodbye"
    # ---------------------------